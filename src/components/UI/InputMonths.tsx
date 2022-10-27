import React from "react"

function InputMonths(props: any) {
    return (
        <div className="flex flex-col sm:w-full">
            <span>{props.span}</span>
            <div className="relative sm:h-20 xl:h-9 text-gray-600 border rounded-md flex flex-row justify-between items-center px-4 py-[6px]">
                <button>
                    <svg
                        onClick={() => {
                            if (props.value > props.min) {
                                props.onValueChange(props.value - 1)
                            }
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                {props.value}
                <button>
                    <svg
                        onClick={() => {
                            if (props.value < props.max) {
                                props.onValueChange(props.value + 1)
                            }
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default InputMonths
