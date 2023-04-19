interface ChildProps {
    color: string;
    onClick: () => void;
    // children?: React.ReactNode;
}

export const Child = ({color, onClick}: ChildProps) => {
    return <div>{color}
    <button onClick={onClick}>Clic kMe</button>
    </div>
};

export const ChildAsFc: React.FC<ChildProps> =({color, onClick}) =>{
    return <div>{color}<button onClick={onClick}>Clic kMe</button></div>;
};

