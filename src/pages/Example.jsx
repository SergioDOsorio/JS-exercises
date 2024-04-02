import '../App.css';
import { Link } from 'react-router-dom';

export default function Example({ exampleTitle, example, code }) {

    return (
        <>
            <div className='container'>
                <h1>{exampleTitle}</h1>
                <div className='container-example'>
                    <div className='example'>
                        {example}
                    </div>
                    <div className='script'>
                        <h2>Code involved</h2>
                        <div className='h90'>
                            {code}
                        </div>
                        <hr />
                        <p>For more details you can press "F12" a see the details of the structure</p>
                    </div>

                </div>
                <Link to="/" className='previous'>Previous page</Link>
            </div>
        </>
    )
}