import React from 'react';

export default function ErrorMessage({ message }){
    return (
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
            {message}
        </div>
    );
};


