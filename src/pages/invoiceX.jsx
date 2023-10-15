import { useEffect, useState, Fragment,useRef } from 'react';
// import './invoiceX.css';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios";
import Cookies from 'js-cookie'

const InvoiceX = () => {

    const ref = useRef()

    const {invoiceId,orderId} = useParams();
    const [invoice,setInvoice] =useState('false')


    const { orders } = useSelector(
        (state) => state.myOrders
    );

    async function fetchData(){
      
        try{
          
            const token = Cookies.get('token')
          
            const config = {
              headers: {
                'Authorization': `Bearer ${token}` 
              },
            };
            const {data} = await axios.get(`http://34.202.67.106:8080/api/v1/invoice/${invoiceId}`,config)
            console.log(data.invoice)
            setInvoice(data.invoice)
        }catch(error){
            console.log(error)
        }
    }

    


    // useEffect(() => {

    //     fetchData()
       
    // }, []);

    return (
        
    <Fragment>
    {invoice === 'true'? (
    //   <Loader />
    <></>
    ) : (
        <Fragment>
         <section id="invoice" style={{ background: '#b3b3b3', padding: '10px' }}>
            <div className="invoice" style={{ background: '#fff', margin: '20px auto', padding: '40px', width: '800px', maxWidth: '100%' }}>
                <div className="invoice_info" style={{ background: '#fff' }}>
                <div className="i_row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="i_logo" style={{ width: '100%' }}>
                    <h1 style={{ fontSize: '38px', lineHeight: '44px', color: '#2f2929', fontWeight: 700, textTransform: 'uppercase', }}>
                        INNOVATE<br />Phytoceuticals
                    </h1>
                    </div>
                    <div className="title" style={{ width: '100%' }}>
                    <h1 style={{ fontSize: '38px', lineHeight: '44px', color: '#2f2929', fontWeight: 700, textAlign:'right'}}>
                        INVOICE
                    </h1>
                    </div>
                </div>
                <div className="i_row" style={{ display: 'flex',marginTop:'20px' }}>
                    <div className="i_to" style={{ width: '50%', marginBottom: '40px' }}>
                    <div className="main_title" style={{ fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', color: '#2f2929' }}>
                        <p>Sold To</p>
                    </div>
                    <div className="p_title" style={{ fontWeight: 500, fontSize: '14px' }}>
                        <p><strong>Name</strong></p>
                        <span>fsdfsdf, </span>
                        <span>fsdfsd</span>
                        <br />
                        <span>fsdfsd</span>
                        <br />
                        <span>Zip: fsdfds</span>
                    </div>
                    </div>
                    <div className="i_details" style={{ width: '50%', textAlign: 'right', marginBottom: '40px' }}>
                    <div className="main_title" style={{ fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', color: '#2f2929' }}>
                        <p>Invoice details</p>
                    </div>
                    <div className="p_title" style={{ fontWeight: 500, fontSize: '14px' }}>
                        <p><strong>Invoice No:</strong> <span>fsdf</span></p>
                    </div>
                    <div className="p_title" style={{ fontWeight: 500, fontSize: '14px' }}>
                        <p><strong>Date:</strong> <span>fsdfsd</span></p>
                    </div>
                    <div className="p_title" style={{ fontWeight: 500, fontSize: '14px' }}>
                        <p><strong>GST No:</strong> <span>fsdfsd</span></p>
                    </div>
                    <div className="p_title" style={{ fontWeight: 500, fontSize: '14px' }}>
                        <p><strong>Email:</strong> <span>fsdfd</span></p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="invoice_table">
                <div className="i_table" style={{ border: '1px solid #2f2929', borderBottom: 0}}>
                    <div className="i_table_head" style={{ borderBottom:'1px solid #2f2929' ,background: '#e7e7e9'  }}>
                    <div className="i_row" style={{ display:'flex',justifyContent:'space-between' }}>
                        <div className="i_col" style={{ width: '15%', textAlign: 'center', padding: '12px 10px',fontSize:'12px',fontWeight:700 }}>
                        <p>Quantity</p>
                        </div>
                        <div className="i_col" style={{ width: '55%', padding: '12px 10px', fontSize:'12px',fontWeight:700 }}>
                        <p>Description</p>
                        </div>
                        <div className="i_col" style={{ width: '15%', textAlign: 'center', padding: '12px 10px' , fontSize:'12px',fontWeight:700}}>
                        <p>Unit Price</p>
                        </div>
                        <div className="i_col" style={{ width: '15%', textAlign: 'center', padding: '12px 10px' , fontSize:'12px',fontWeight:700}}>
                        <p>Discount%</p>
                        </div>
                        <div className="i_col" style={{ width: '15%', textAlign: 'center', padding: '12px 10px' , fontSize:'12px',fontWeight:700}}>
                        <p>Tax</p>
                        </div>
                        <div className="i_col" style={{ width: '15%', textAlign: 'right', padding: '12px 10px' , fontSize:'12px',fontWeight:700}}>
                        <p>Amount(CAD)</p>
                        </div>
                    </div>
                    </div>
                    <div className="i_table_body" style={{ borderBottom: '1px solid #2f2929' }}>
                    <div className="i_row" style={{display:'flex',justifyContent:'space-between'  }}>
                        <div className="i_col" style={{ width: '15%', textAlign: 'center', padding: '12px 10px',fontSize:'12px' }}>
                        <p>fsdfsd</p>
                        </div>
                        <div className="i_col" style={{ width: '55%', padding: '12px 10px',fontSize:'12px' }}>
                        <span>fsdfsd</span>
                        </div>
                        <div className="i_col" style={{ width: '15%', textAlign: 'center', padding: '12px 10px',fontSize:'12px' }}>
                        <p>fsdfs</p>
                        </div>
                        <div className="i_col" style={{ width: '15%', textAlign: 'center', padding: '12px 10px', fontSize:'12px'}}>
                        <p></p>
                        </div>
                        <div className="i_col" style={{ width: '15%', textAlign: 'center', padding: '12px 10px',fontSize:'12px' }}>
                        <p>fsdf: <span>rwer</span></p>
                        </div>
                        <div className="i_col" style={{ width: '15%', textAlign: 'right', padding: '12px 10px', fontSize:'12px'}}>
                        <p>fsdfsdf</p>
                        </div>
                    </div>
                    </div>
                    <div className="i_table_foot" style={{ borderBottom: '1px solid #2f2929' }}>
                    <div className="i_row" style={{display:'flex',justifyContent:'space-between'  }}>
                        <div className="i_col" style={{ width: '50%', padding: '12px 10px', fontSize:'12px', fontWeight:'700' }}>
                        <p>Total Amount</p>
                        <p>Amount Paid</p>
                        <p>Amount Owing</p>
                        </div>
                        <div className="i_col" style={{ width: '50%', textAlign: 'right', padding: '12px 10px',fontSize:'12px', fontWeight:'700' }}>
                        <p>fsdfsdf</p>
                        <p>0.00</p>
                        <p>fsdfsdf</p>
                        </div>
                    </div>
                    <div className="i_row grand_total_wrap" style={{ borderBottom: '1px solid #2f2929', background: '#e7e7e9' ,padding:'20px' }}>
                        <div className="invoice_term" style={{ margin: 0 }}>
                        <div className="main_title" style={{ fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', color: '#2f2929' }}>
                            <b>Terms & Conditions:</b>
                        </div>
                        <span style={{fontSize:'12px'}}>1. Invoices are payable 30 days upon receipt</span><br />
                        <span style={{fontSize:'12px'}}>2. No laboratory work can begin without receipt of payment</span><br />
                        <span style={{fontSize:'12px'}}>3. Overdue accounts are subject to a 2% monthly interest charge</span><br />
                        <span style={{fontSize:'12px'}}>4. Meetings/communication beyond the reasonable project scope may be classified as billable hours</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="invoice_payment" style={{ marginTop:'40px' }}>
                <div className="i_row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="i_payment" style={{ width: '50%', marginBottom: '40px' }}>
                    <div className="main_title" style={{ fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', color: '#2f2929' }}>
                        <p>Payment Method</p>
                    </div>
                    <div className="p_title" >
                        <p style={{ fontWeight: 700, fontSize: '12px', marginBottom: '5px' }}>1. Cheque (payable to Innovate Phytoceuticals): </p>
                        <span style={{fontSize: '12px', lineHeight:.3}}>#2-3485 Velocity Ave, Kelowna, BC, V1V 3C2</span>
                    </div>
                    <div className="p_title">
                        <p style={{ fontWeight: 700, fontSize: '12px', marginBottom: '5px' }}>2. E-transfer: </p>
                        <a style={{fontSize: '12px', lineHeight:.3, color: '#007bff'}} href="mailto:ar@invp-lab.com"><span>ar@invp-lab.com</span></a>
                    </div>
                    <div className="p_title">
                        <p style={{ fontWeight: 700, fontSize: '12px', marginBottom: '5px' }}>4. Click the button below to pay this invoice online.</p>
                        <a href="https://money.sage.com/#/paynow/b333d35c-299b-4345-ba1e-d7c556159d60">
                        <button style={{ background: '#007bff', color: '#fff', fontWeight: 'bold', padding: '2px 4px', borderRadius: '3px' }}>Pay Now</button>
                        </a>
                    </div>
                    </div>
                    <div className="i_duetotal" style={{ width: '50%', textAlign: 'right' }}>
                    <div className="p_title" >
                        <p style={{ fontWeight: 700, fontSize: '12px' }}>  3. Wire Transfer in Canadian Funds:</p>
                        <span style={{fontSize: '12px', lineHeight:.3}}> BMO Bank of Montreal<br />
                        595 Burrard St<br />
                        Vancouver, BC, V7X 1L7<br />
                        Institution/Bank #: 001<br />
                        Branch/Transit #: 00040<br />
                        Account #: 1600248<br />
                        SWIFT/BIC CODE: BOFMCAM2<br />
                        IBAN #: 00041600248<br />
                        Routing #: 000100040<br />
                        It is imperative that all bank fees associated with sending a payment be borne by the remitting Company.
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        </Fragment>
      )}
    </Fragment>
    )
}

export default InvoiceX;
