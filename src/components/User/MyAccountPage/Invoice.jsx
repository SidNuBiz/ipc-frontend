import { useEffect, useState, Fragment } from 'react';
import Loader from "../../../pages/Loader";
import './Invoice.css';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios";
import Cookies from 'js-cookie'
const Invoice = () => {
    const {invoiceId,orderId} = useParams();
    const [invoice,setInvoice] =useState('true')


    const { orders,loading } = useSelector(
        (state) => state.myOrders
    );


    useEffect(() => async() => { 
        try{
            const token = Cookies.get('token')
          
            const config = {
              headers: {
                'Authorization': `Bearer ${token}` 
              },
            };
            const {data} = await axios.get(`http://localhost:8080/api/v1/invoice/${invoiceId}`,config)
            console.log(data.invoice)
            setInvoice(data.invoice)
        }catch(error){
            console.log(error)
        }
    },[])
    return (
        
    <Fragment>
    {invoice == 'true'? (
      <Loader />
    ) : (
        <Fragment>
        <section id="invoice">
            <div class="invoice">
                <div class="invoice_info">
                <div class="i_row">
                    <div class="i_logo">
                    <h1>INNOVATE<br/>Phytoceuticals</h1>
                    </div>
                    <div class="title">
                    <h1>INVOICE</h1>
                    </div>
                </div>
                <div class="i_row">

                    <div class="i_to">
                    <div class="main_title">
                        <p>Sold To</p>
                    </div>
                    <div class="p_title">
                        <p>{invoice.cusven_name}</p>
                        <span>{orders[orderId].billingAddress.country}, </span>
                        <span>{orders[orderId].billingAddress.city}</span>
                        <br/>
                        <span>{orders[orderId].billingAddress.details}</span>
                        <br/>
                        <span>Zip: {orders[orderId].billingAddress.zip}</span>
                        
                        
                    </div>
                 
                    </div>
                    <div class="i_details text_right">
                    <div class="main_title">
                        <p>Invoice details</p>
                    </div>
                    <div class="p_title">
                        <p>Invoice No : <span>{invoice.invoice_number}</span></p>
                        
                    </div>
                    <div class="p_title">
                        <p>Date : <span>{invoice.invoice_date}</span></p>
                        
                    </div>
                    <div class="p_title">
                        <p>GST No : <span>356324635632</span></p>
                        
                    </div>
              
                    <div class="p_title">
                        <p>Email : <span>{orders[orderId].email}</span></p>
                        
                    </div>
                    </div>
                </div>
                </div>
                <div class="invoice_table">
                <div class="i_table">
                    <div class="i_table_head">
                    <div class="i_row">
                        <div class="i_col w_15 text_center">
                        <p class="p_title">Quantity</p>
                        </div>
                        <div class="i_col w_55">
                        <p class="p_title">Description</p>
                        </div>
                       
                        <div class="i_col w_15 text_center">
                        <p class="p_title">Unit Price</p>
                        </div>
                        <div class="i_col w_15 text_center">
                        <p class="p_title">Discount %</p>
                        </div>
                        <div class="i_col w_15 text_center">
                        <p class="p_title">Tax</p>
                        </div>
                        <div class="i_col w_15 text_right">
                        <p class="p_title">Amount(CAD)</p>
                        </div>
                    </div>
                    </div>
                    <div class="i_table_body">
                    <div class="i_row">
                        <div class="i_col w_15 text_center">
                        <p>{invoice.detail_lines[0].quantity}</p>
                        </div>
                        <div class="i_col w_55">
                     
                        <span>{invoice.detail_lines[0].item_description}</span>
                        </div>
                      
                        <div class="i_col w_15 text_center">
                        <p>{invoice.detail_lines[0].price}</p>
                        </div>
                        <div class="i_col w_15 text_center">
                        <p></p>
                        </div>
                        <div class="i_col w_15 text_center">
                        {invoice.tax_lines.map(tax => (
                            <>
                            <p>{tax.tax_authority}: <span>{tax.tax_amount}</span></p>
                            </>
                            
                        ))}
                        
                        </div>
                        <div class="i_col w_15 text_right">
                        <p>{invoice.total}</p>
                        </div>
                    </div>

                    </div>
                    <div class="i_table_foot">
                    <div class="i_row">
                        <div class="i_col w_50">
                        <p>Total Amount</p>
                        <p>Amount Paid</p>
                        <p>Amount Owing</p>
                        </div>
                        <div class="i_col w_50 text_right">
                        <p>{invoice.total}</p>
                        <p>0.00</p>
                        <p>{invoice.total}</p>
                        </div>
                    </div>
                    <div class="i_row grand_total_wrap">
                        <div class="invoice_term">
                            <div class="main_titl">
                                <b>Terms & Conditions:</b>
                            </div>
                            <span>1. Invoices are payable 30 days upon receipt</span><br/>
                            <span>2. No laboratory work can begin without receipt of payment</span><br/>
                            <span>3. Overdue accounts are subject to a 2% monthly interest charge</span><br/>
                            <span>4. Meetings/communication beyond the reasonable project scope may be classified as billable hours</span>
                        </div>
                    </div>
                    </div>
                </div>

                </div>
                <div class="invoice_payment">
                <div class="i_row">
                    <div class="i_payment">
                    <div class="main_title">
                        <p>Payment Method</p>
                    </div>
                    <div class="p_title" style={{marginBottom:'5px'}}>
                        <p>1. Cheque (payable to Innovate Phytoceuticals): </p>
                        <span>#2-3485 Velocity Ave, Kelowna, BC, V1V 3C2</span>
                    </div>
                    <div class="p_title" style={{marginBottom:'5px'}}>
                        <p>2. E-transfer: </p>
                        <a href='mailto:ar@invp-lab.com'><span style={{color:'blue'}}>ar@invp-lab.com</span></a>
                    </div>
                    
                    <div class="p_title" style={{marginBottom:'5px'}}>
                        <p style={{marginBottom:'5px'}}>4. Click the button below to pay this invoice online.</p>
                        <a href="https://money.sage.com/#/paynow/b333d35c-299b-4345-ba1e-d7c556159d60">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Pay Now
                            </button>
                        </a>
                       
                    </div>
                
                    </div>
                    <div class="i_duetotal text_right">
                   
                    <div class="p_title">
                        <p>3. Wire Transfer in Canadian Funds:
                           
                        </p>
                        <span> BMO Bank of Montreal<br/>
                            595 Burrard St<br/>
                            Vancouver, BC, V7X 1L7<br/>

                            Institution/Bank #: 001<br/>
                            Branch/Transit #: 00040<br/>
                            Account #: 1600248<br/>
                            SWIFT/BIC CODE: BOFMCAM2<br/>
                            IBAN #: 00041600248<br/>
                            Routing #: 000100040<br/>

                            It is imperative that all bank fees associated with sending a payment be borne by the remitting Company.</span>
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

export default Invoice;
