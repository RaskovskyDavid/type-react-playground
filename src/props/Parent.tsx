import { ChildAsFc } from './Child';
const Parent = () => {
    return <ChildAsFc color='white' onClick={()=> console.log('click')} >
         estos son child 
        </ChildAsFc>;
};
export default Parent;