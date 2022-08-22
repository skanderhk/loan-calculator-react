import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react"
import { IProduct } from "src/interfaces/Product"
import useCurrencyFormat from "../../utils/useCurrencyFormat"
import products from "./../../../build/public/products.json"
import InputAmount from "./InputAmount"
import InputMonths from "./InputMonths"

function Card() {
    const [product, setProduct] = useState<IProduct>(products[1])
    const [amount, setAmount] = useState(+product.min_amount)
    const [months, setMonths] = useState(+product.min_tenure)
    const [total, setTotal] = useState(0)

    console.log(amount)

    const handleAmountChange = (amount: number) => {
        setAmount(amount)
    }

    const handleMonthsChange = (months: number) => {
        setMonths(months)
    }

    useEffect(() => {
        setTotal(+amount * +product.interest + +amount)
    }, [amount, product, months])

    return (
        <div className="flex flex-col items-center bg-white rounded-[8px] shadow-default p-10 max-w-[460px]">
            <div>
                <div className="flex flex-row justify-center items-center gap-3">
                    {products.map((item) => (
                        <button key={item.id}>
                            <img
                                className={item.id === "21" ? "h-[63px]" : "h-12"}
                                src={item.image}
                                alt={item.name}
                                onClick={() => {
                                    setProduct(item)
                                    setAmount(+item.min_amount)
                                    setMonths(+item.min_tenure)
                                }}
                            />
                        </button>
                    ))}
                </div>
                {!product && (
                    <div className="text-red-500 text-[10px] flex justify-center items-center">
                        *Select Loan Type First
                    </div>
                )}
            </div>
            <div className="flex flex-row justify-between items-center mb-5 gap-4">
                <InputAmount
                    span={"Loan amount"}
                    value={amount}
                    onValueChange={handleAmountChange}
                    disabled={!product}
                    min={product.min_amount}
                    max={product.max_amount}
                />
                <InputMonths
                    span={"Number of Months"}
                    value={months}
                    onValueChange={handleMonthsChange}
                    product={product}
                    min={product.min_tenure}
                    max={product.max_tenure}
                />
            </div>
            <div className="flex flex-col border rounded-md min-w-full p-5">
                <div className="flex flex-row justify-between items-center">
                    <div>Monthly Amount</div>
                    <div className="text-3xl text-secondary-default font-bold font-rubik">
                        ${useCurrencyFormat(+total / +months)}
                    </div>
                </div>
                <p className="max-w-sm font-light mt-5">
                    You’re planning{" "}
                    <strong className="font-semibold">{months} monthly deposits</strong> to reach
                    your <strong className="font-semibold">{amount}</strong> goal by{" "}
                    <strong className="font-semibold">
                        {new Date(
                            new Date().setMonth(new Date().getMonth() + months)
                        ).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </strong>
                    . The total amount loaned will be{" "}
                    <strong className="font-semibold">{useCurrencyFormat(total)}</strong>.
                </p>
            </div>
            <button className="bg-primary-default mt-5 p-4 px-20 rounded-[32px] text-white">
                Apply Now
            </button>
        </div>
    )
}

export default Card
