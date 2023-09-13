import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import * as jose from 'jose';
import { setCookie } from 'cookies-next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, city, password } = req.body;
        const errors: string[] = [];

        const validationSchema = [
            {
                valid: validator.isLength(firstName, {
                    min: 1,
                    max: 20,
                }),
                errorMessage: 'Please enter your first name',
            },
            {
                valid: validator.isLength(lastName, {
                    min: 1,
                    max: 20,
                }),
                errorMessage: 'Please enter your last name',
            },
            {
                valid: validator.isEmail(email),
                errorMessage: 'Please enter a valid email address',
            },
            {
                valid: validator.isMobilePhone(phone),
                errorMessage: 'Please enter a valid phone number',
            },
            {
                valid: validator.isLength(city, { min: 1 }),
                errorMessage: 'City must be contain at least 1 character',
            },
            {
                valid: validator.isStrongPassword(password),
                errorMessage: 'Your password is not strong enough',
            }
        ];

        validationSchema.forEach((check) => {
            if (!check.valid) {
              errors.push(check.errorMessage);
            }
        });

        if (errors.length) {
            return res.status(400).json({ errorMessage: errors[0] });
        }

        const userWithEmail = await prisma.user.findUnique({
            where: {
              email,
            },
        });

        if (userWithEmail) {
            return res
              .status(400)
              .json({ errorMessage: 'This email already exists in our system' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                first_name: firstName,
                last_name: lastName,
                password: hashedPassword,
                city,
                phone,
                email
            }
        });

        const alg = 'HS256';

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        const token = await new jose.SignJWT({ email: user.email })
            .setProtectedHeader({ alg })
            .setExpirationTime('24h')
            .sign(secret);

        setCookie('jwt', token, { req, res, maxAge: 60 * 6 * 24 });

        return res.status(200).json({
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            phone: user.phone,
            city: user.city
        });   
    }

    return res.status(404).json('Unknown endpoint');
}