import { Child } from './Child';
const Parent = () => {
    return <Child color='white' onClick={()=> console.log('click')} />
};
export default Parent;