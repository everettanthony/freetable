interface Props {
    inputs: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        city: string;
        password: string;
    };
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isSignin: boolean;
}

export default function LoginModalInputs({ inputs, handleChangeInput, isSignin }: Props) {
  return (
    <div>
        {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm">
            <input
                type="text"
                className="border rounded p-2 py-3 w-[49%] 
                outline-none focus:placeholder-transparent"
                placeholder="First Name"
                autoComplete="false"
                value={inputs.firstName}
                onChange={handleChangeInput}
                name="firstName"
            />
            <input
                type="text"
                className="border rounded p-2 py-3 w-[49%] 
                outline-none focus:placeholder-transparent"
                placeholder="Last Name"
                autoComplete="false"
                value={inputs.lastName}
                onChange={handleChangeInput}
                name="lastName"
            />
        </div>
        )}
        <div className="my-3 flex justify-between text-sm">
            <input
                type="text"
                className="border rounded p-2 py-3 w-full 
                outline-none focus:placeholder-transparent"
                placeholder="Email"
                autoComplete="false"
                value={inputs.email}
                onChange={handleChangeInput}
                name="email"
            />
        </div>
        {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm">
            <input
                type="text"
                className="border rounded p-2 py-3 w-[49%] 
                outline-none focus:placeholder-transparent"
                placeholder="Phone"
                autoComplete="false"
                value={inputs.phone}
                onChange={handleChangeInput}
                name="phone"
            />
            <input
                type="text"
                className="border rounded p-2 py-3 w-[49%] 
                outline-none focus:placeholder-transparent"
                placeholder="City"
                autoComplete="false"
                value={inputs.city}
                onChange={handleChangeInput}
                name="city"
            />
        </div>
        )}
        <div className="my-3 flex justify-between text-sm">
            <input
                type="password"
                className="border rounded p-2 py-3 w-full 
                outline-none focus:placeholder-transparent"
                placeholder="Password"
                autoComplete="false"
                value={inputs.password}
                onChange={handleChangeInput}
                name="password"
            />
        </div>
    </div>
  )
}
