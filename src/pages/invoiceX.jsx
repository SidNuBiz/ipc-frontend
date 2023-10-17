import { useEffect, useState, Fragment,useRef } from 'react';
// import './invoiceX.css';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios";
import Cookies from 'js-cookie'
import { PDFDownloadLink, Document,Text,View, Page, PDFViewer,StyleSheet,Font } from '@react-pdf/renderer';

const InvoiceX = () => {

    Font.register({ family: 'ubuntu', src: "https://fonts.googleapis.com/css2?family=Redressed&family=Ubuntu:wght@400;700&display=swap" });

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: 30,
          fontFamily:'Helvetica',
          justifyContent:'flex-start',
      
          
        },
        section: {
          // margin: 10,
          // padding: 10,
          flexGrow: 1,
          flexBasis: '50%',
        },
        title: {
          fontSize: 24,
          fontWeight: '700',
          marginBottom: 10,
          textTransform: 'uppercase',
        },
        subtitle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 10,
        },
        text: {
          fontSize: 10,
          marginBottom: '13px',
        },
        strong: {
          fontWeight: '900',
        },
        row: {
          flexDirection: 'row',
          marginBottom: 10,
        },
        col: {
          // flexGrow: 1,
          paddingTop: 10,
          // paddingLeft:10,
          // paddingRight:10
          // borderBottom: '1px solid #000',
        },
        colCenter: {
          // flexGrow: 1,
          textAlign: 'center',
          paddingTop: 10,
          // paddingLeft:10,
          // paddingRight:10
          // borderBottom: '1px solid #000',
        },
        colRight: {
          // flexGrow: 1,
          textAlign: 'right',
          paddingTop: 10,
          // paddingLeft:10,
          // paddingRight:10
          // borderBottom: '1px solid #000',
        },
        table: {
          border: '1px solid #000',
          borderBottom: 0,
          
        },
        tableHead: {
          borderBottom: '1px solid #000',
          backgroundColor: '#e7e7e9',
         
        },
        tableFoot: {
          fontSize:'10px',
          borderBottom: '1px solid #000',
          // padding: 10,
        
          backgroundColor: '#ffffff',
        },
        invoiceTerm: {
          fontSize: 12,
          marginBottom: 5,
        },
        paymentMethod: {
          fontSize: 16,
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
        button: {
          backgroundColor: '#007bff',
          color: 'white',
          fontWeight: 'bold',
          padding: '4px 8px',
          borderRadius: 3,
          textDecoration: 'none',
        },
        logo: {
          fontSize: 36,
          fontWeight: 'bold',
          marginBottom: 10,
        },
      });
      

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

    function printInvoice () {
        var printContents = document.getElementById('print').innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;

        window.print();

        document.body.innerHTML = originalContents;
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
                <div className="invoice" id='print' style={{ background: '#fff', margin: '20px auto', padding: '40px', width: '800px', maxWidth: '100%' }}>
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
                        <p>fsdfsdoi</p>
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
                    <div className="i_payment" style={{ width: '50%' }}>
                    <div className="main_title" style={{ fontWeight: 700, marginBottom: '20px', fontSize: '16px', textTransform: 'uppercase', color: '#2f2929' }}>
                        <p>Payment Method</p>
                    </div>
                    <div className="p_title" >
                        <p style={{ fontWeight: 700, fontSize: '12px' }}>1. Cheque (payable to Innovate Phytoceuticals): </p>
                        <span style={{fontSize: '12px', lineHeight:.3 }}>#2-3485 Velocity Ave, Kelowna, BC, V1V 3C2</span>
                    </div>
                    <div className="p_title">
                        <p style={{ fontWeight: 700, fontSize: '12px' }}>2. E-transfer: </p>
                        <a style={{fontSize: '12px', lineHeight:.3, color: '#007bff',marginBottom: '5px'}} href="mailto:ar@invp-lab.com"><span>ar@invp-lab.com</span></a>
                    </div>
                    <div className="p_title">
                        <p style={{ fontWeight: 700, fontSize: '12px', marginBottom:'15px' }}>4. Click the button below to pay this invoice online.</p>
                        <a href="https://money.sage.com/#/paynow/b333d35c-299b-4345-ba1e-d7c556159d60">
                        <button style={{ background: '#007bff', color: '#fff', fontWeight: 'bold', padding: '4px 6px', borderRadius: '3px' }}>Pay Now</button>
                        </a>
                    </div>
                    </div>
                    <div className="i_duetotal" style={{ width: '50%', textAlign: 'right' }}>
                    <div className="p_title" >
                        <p style={{ fontWeight: 700, fontSize: '12px' }}>  3. Wire Transfer in Canadian Funds:</p>
                        <p style={{fontSize: '12px', lineHeight:1.3,}}> BMO Bank of Montreal<br />
                        595 Burrard St<br />
                        Vancouver, BC, V7X 1L7<br />
                        Institution/Bank #: 001<br />
                        Branch/Transit #: 00040<br />
                        Account #: 1600248<br />
                        SWIFT/BIC CODE: BOFMCAM2<br />
                        IBAN #: 00041600248<br />
                        Routing #: 000100040<br />
                        It is imperative that all bank fees associated with sending a payment be borne by the remitting Company.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <Document>
      <Page size="A4" style={styles.page}>
      
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View >
                <Text style={styles.title}>
                    INNOVATE
                    {'\n'}
                    Phytoceuticals
                </Text>
              
                
            </View>
            <View >
                <Text style={styles.title}>
                    INVOICE
                </Text>
            </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between' ,marginTop:'20px'}}>
            <View >
                
                <Text style={[styles.text,{lineHeight:'1.4px'}]}>
                    <Text style={styles.subtitle}>SOLD TO</Text>
                    {'\n'}
                   
                    <Text style={styles.strong}>Name</Text>
                    {'\n'}
                    fsdfsdf, fsdfsd
                    {'\n'}
                    fsdfsd
                    {'\n'}
                    Zip: fsdfds
                </Text>
            </View>
            <View style={{textAlign:'right',textDecoration:'right'}} >
                
                <Text style={[styles.text,{lineHeight:'1.4px'}]}>
                    <Text style={[styles.subtitle,{fontWeight:900}]}>INVOICE DETAILS</Text>
                    {'\n'}
                   
                    <Text style={styles.strong}>Invoice No:</Text> fsdf
                    {'\n'}
                    <Text style={styles.strong}>Date:</Text> fsdfsd
                    {'\n'}
                    <Text style={styles.strong}>GST No:</Text> fsdfsd
                    {'\n'}
                    <Text style={styles.strong}>Email:</Text> fsdfd
                </Text>
            </View>
        </View>
         
        <View style={[styles.section,{marginTop:'20px'}]}>
          <View style={styles.table}>
            <View style={styles.tableHead}>
              <View style={[styles.row,{fontSize:'10px'}]}>
                <View style={[styles.colCenter,{flexBasis:'60px'}]}>
                  <Text>Quantity</Text>
                </View>
                <View style={[styles.col,{flexBasis:'167px'}]}>
                  <Text>Descriptionad</Text>
                </View>
                <View style={[styles.colCenter,{flexBasis:'75px'}]}>
                  <Text>Unit Price</Text>
                </View>
                <View style={[styles.colCenter,{flexBasis:'70px'}]}>
                  <Text>Discount %</Text>
                </View>
                <View style={[styles.colCenter,{flexBasis:'75px'}]}>
                  <Text>Tax</Text>
                </View>
                <View style={[styles.colRight,{flexBasis:'75px'}]}>
                  <Text>Amount(CAD)</Text>
                </View>
              </View>
            </View>
            <View style={[styles.row,{fontSize:'10px',borderBottom:'1px solid #000',paddingBottom:'10px'}]}>
              <View style={[styles.colCenter,{flexBasis:'60px'}]}>
                <Text>5</Text>
              </View>
              <View style={[styles.col,{flexBasis:'167px',paddingLeft:'3px'}]}>
                <Text>fsdfsd</Text>
              </View>
              <View style={[styles.colCenter,{flexBasis:'75px'}]}>
                <Text>fsdfs</Text>
              </View>
              <View style={[styles.colCenter,{flexBasis:'70px'}]}>
                <Text></Text>
              </View>
              <View style={[styles.colCenter,{flexBasis:'75px'}]}>
                <Text>fsdf: rwer</Text>
              </View>
              <View style={[styles.colRight,{flexBasis:'75px'}]}>
                <Text>fsdfsdf</Text>
              </View>
            </View>
            <View style={[styles.tableFoot,{paddingHorizontal:10}]}>
              <View style={[styles.row,{justifyContent:'space-between'}]}>
                <View style={{textAlign:'left',textDecoration:'left'}} >
                  <Text style={{lineHeight:'1.4px'}}>
                    <Text>Total Amount</Text>
                    {'\n'}
                    <Text>Amount Paid</Text>
                    {'\n'}
                    <Text>Amount Owing</Text>
                  </Text>
                </View>
                <View style={{textAlign:'right',textDecoration:'right'}}>
                  <Text style={{lineHeight:'1.4px'}}>
                    <Text>fsdfsdf</Text>
                    {'\n'}
                    <Text>0.00</Text>
                    {'\n'}
                    <Text>fsdfsdf</Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.tableFoot,{backgroundColor:'#e7e7e9',padding:'10px'}]}>
              <View style={[styles.row]}>
                <View style={{textAlign:'left',textDecoration:'left'}} >
                  <Text style={{lineHeight:'1.8px'}}>
                  <Text style={styles.subtitle}>TERMS & CONDITIONS:</Text>
                    {'\n'}
                    <Text>1. Invoices are payable 30 days upon receipt</Text>
                    {'\n'}
                    <Text>2. No laboratory work can begin without receipt of payment</Text>
                    {'\n'}
                    <Text>3. Overdue accounts are subject to a 2% monthly interest charge</Text>
                    {'\n'}
                    <Text>4. Meetings/communication beyond the reasonable project scope may be classified as billable hours</Text>
                  </Text>
                </View>
              
              </View>
            </View>
           
          </View>
          <View style={{marginTop:'20px'}} > 
          <Text style={styles.paymentMethod}>Payment Method</Text>
          <View style={[{flexDirection:'row',justifyContent:'space-between'}]} >
            <View style={styles.section}>

            <Text style={styles.text}>
              <Text style={[styles.strong,{lineHeight:'1.7px'}]}>{'\n'}
              1. Cheque (payable to Innovate Phytoceuticals):</Text>
              {'\n'}
              #2-3485 Velocity Ave, Kelowna, BC, V1V 3C2
            </Text>
            <Text style={styles.text}>
              <Text style={styles.strong}>{'\n'}2. E-transfer:</Text>
              {'\n'}
              <a style={styles.button} href="mailto:ar@invp-lab.com">ar@invp-lab.com</a>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.strong}>{'\n'}4. Click the button below to pay this invoice online.</Text>
              {'\n'}
              <a style={styles.button} href="https://money.sage.com/#/paynow/b333d35c-299b-4345-ba1e-d7c556159d60">
                Pay Now
              </a>
            </Text>
            </View>
            <View style={[styles.section,{textAlign:'right',textDecoration:'right'}]}>
              <Text style={styles.text}>
                <Text style={[styles.strong,{lineHeight:'1.5px'}]}>{'\n'}3. Wire Transfer in Canadian Funds:</Text>
                {'\n'}
                BMO Bank of Montreal
                {'\n'}
                595 Burrard St
                {'\n'}
                Vancouver, BC, V7X 1L7
                {'\n'}
                Institution/Bank #: 001
                {'\n'}
                Branch/Transit #: 00040
                {'\n'}
                Account #: 1600248
                {'\n'}
                SWIFT/BIC CODE: BOFMCAM2
                {'\n'}
                IBAN #: 00041600248
                {'\n'}
                Routing #: 000100040
                {'\n'}
                It is imperative that all bank fees associated with sending a payment be borne by the remitting Company.
              </Text>
            </View>
          </View>
          </View>
          
        </View>
       
      
   
      </Page>
    </Document>
        </PDFViewer>

        <div>

        
    <PDFDownloadLink document={<Document>
    <Page size="A4" >
     
      <div  style={{ display: 'flex', justifyContent: 'space-between' }}>
                   
      <View style={{color:'blue',fontSize:'20px'}} >
        <Text>
            INVOICE
        </Text>
        </View>
        <View >
        <Text>Section #2</Text>
      </View>
    </div>
        
      
     
    </Page>
  </Document>} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </div>

        <button onClick={printInvoice}>Print</button>

        </Fragment>
      )}
    </Fragment>
    )
}

export default InvoiceX;
