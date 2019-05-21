import * as React from 'react';

export interface RemoveIconProps {
    onClick: () => void
}

export const RemoveIcon: React.FC<RemoveIconProps> = ({ onClick }) => {
    return (
        <div className="close-btn" onClick={onClick} />
    )
}