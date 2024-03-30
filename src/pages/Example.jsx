import '../App.css';
import { Link } from 'react-router-dom';
import { Ex_Bin2Dec, Ex_BRPreviewer, Ex_Calculator } from '../components/examples/Import_ex';
import { C_Bin2Dec, C_BRPreviewer, C_Calculator } from '../components/code/Import_c';


export default function Example({ exampleTitle, example, code }) {
    const Component1 = eval(example);
    const Component2 = eval(code);

    return (
        <>
            <div className='container'>
                <h1>{exampleTitle}</h1>
                <div className='container-example'>
                    <div className='example'>
                        <Component1 />
                    </div>
                    <div className='script'>
                        <div className='h90'>
                            <h2>Code involved</h2>
                            <Component2 />
                        </div>
                        <div className='h10'>
                            <hr />
                            <p>For more details you can press "F12" a see the details of the structure</p>
                        </div>
                    </div>

                </div>
                <Link to="/" className='previous'>Previous page</Link>
            </div>
        </>
    )
}