import React from 'react'

export default function Hw1({ numbers, user, users }) {

    const evenNumbers = numbers.filter(number => number % 2 === 0);


    return (
        <div>
            <div>{evenNumbers.join(",")}</div>
            <div>
                <p>{user ? `Hello ${user.firstName}  ${user.lastName}` : "Hello Guest"}</p>
            </div>
            <div>
                {users.map((user) =>
                    user.id < 100 ? (
                        <p>{`User ${user.id} User Name ${user.firstName} ${user.lastName}`}</p>
                    ) : null
                )}
            </div>


        </div>
    )
}
