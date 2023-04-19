interface ChildProps {
    color: string;
    // onClick: () => void;
    // children?: React.ReactNode;
}

export const Child = ({color}: ChildProps) => {
    return <div>{color}</div>
};

export const ChildAsFc: React.FC<ChildProps> =({color}) =>{
    return <div>{color}</div>;
};

