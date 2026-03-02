import React from "react";

export const ContactPicker = ({contacts, onChange, value, name}) => {
    return (
        <>
            <select
                required
                onChange={onChange}
                value={value}
                name={name}>

                <option value="">No Contact Selected</option>

                {contacts.map((contact, index) => {
                return (
                    <option key={index} value={contact.name}>
                    {contact.name}
                    </option>
                )})};
            </select>
        </>
    );
};
