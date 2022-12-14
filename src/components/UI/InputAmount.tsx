import React from "react"
import CurrencyInput from "react-currency-input-field"

function InputAmount(props: any) {
    return (
        <div className="flex flex-col sm:w-full">
            <span>{props.span}</span>
            <div className="relative text-gray-600 focus-within:text-gray-400 border rounded-md">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </span>
                <CurrencyInput
                    id="input-example"
                    className="py-1.5 pl-10 text-lg max-w-[215px] font-bold font-rubik rounded-md focus:outline-none focus:text-gray-900 sm:h-20 xl:h-9"
                    name="input-name"
                    placeholder="Amount..."
                    value={props.value}
                    min={props.min}
                    max={props.max}
                    decimalsLimit={2}
                    onValueChange={(value) => props.onValueChange(value)}
                />
            </div>
            <div className="text-red-500 text-[10px] ">
                {props.value < props.min && "*Select Loan Type First"}
            </div>
        </div>
    )
}

export default InputAmount
