import { useEffect, useState, Fragment,useRef } from 'react';
import Loader from "../../../pages/Loader";
// import './Invoice.css';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios";
import Cookies from 'js-cookie'
import { Document,Text,View, Page, PDFViewer,StyleSheet,Font,Link } from '@react-pdf/renderer';
import url from '../../../utils/baseApi';
import { useAlert } from 'react-alert';

const Invoice = () => {

    const alert = useAlert()

    const {invoiceId,orderId} = useParams();
    const [invoice,setInvoice] =useState('true')


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
            const {data} = await axios.get(`${url}/api/v1/invoice/${invoiceId}`,config)
            console.log(data.invoice)
            setInvoice(data.invoice)
        }catch(error){
            alert.error(error.response.data.message)
        }
    }
    
    useEffect(() => {

        fetchData()
       
    }, []);

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: 30,
          fontFamily:'Helvetica',
          justifyContent:'flex-start',
        },
        section: {
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
          paddingTop: 10,
        },
        colCenter: {
          textAlign: 'center',
          paddingTop: 10,
        },
        colRight: {
          textAlign: 'right',
          paddingTop: 10,
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
          fontWeight: 'bold',
          padding: '4px 8px',
          borderRadius: 3,
          width:'64px',
          marginTop:'-6px'
        },
        logo: {
          fontSize: 36,
          fontWeight: 'bold',
          marginBottom: 10,
        },
      });

    return (
        
    <Fragment>
    {invoice === 'true'? (
      <Loader />
    ) : (
        <Fragment>
        
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
                        
                          <Text style={styles.strong}>{invoice.cusven_name}</Text>
                          {'\n'}
                          {orders[orderId].billingAddress.country}, {orders[orderId].billingAddress.city}
                          {'\n'}
                          Zip: {orders[orderId].billingAddress.zip}
                      </Text>
                  </View>
                  <View style={{textAlign:'right',textDecoration:'right'}} >
                      
                      <Text style={[styles.text,{lineHeight:'1.4px'}]}>
                          <Text style={[styles.subtitle,{fontWeight:900}]}>INVOICE DETAILS</Text>
                          {'\n'}
                        
                          <Text style={styles.strong}>Invoice No:</Text> {invoice.invoice_number}
                          {'\n'}
                          <Text style={styles.strong}>Date:</Text> {invoice.invoice_date}
                          {'\n'}
                          <Text style={styles.strong}>GST No:</Text> 356324635632
                          {'\n'}
                          <Text style={styles.strong}>Email:</Text> {orders[orderId].email}
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
                  {invoice.detail_lines.map((item)=>(
                    <View style={[styles.row,{fontSize:'10px',borderBottom:'1px solid #000',paddingBottom:'10px'}]}>
                      <View style={[styles.colCenter,{flexBasis:'60px'}]}>
                        <Text>{item.quantity}</Text>
                      </View>
                      <View style={[styles.col,{flexBasis:'167px',paddingLeft:'3px'}]}>
                        <Text>{item.item_description}</Text>
                      </View>
                      <View style={[styles.colCenter,{flexBasis:'75px'}]}>
                        <Text>{item.price}</Text>
                      </View>
                      <View style={[styles.colCenter,{flexBasis:'70px'}]}>
                        <Text></Text>
                      </View>
                      <View style={[styles.colCenter,{flexBasis:'75px'}]}>
                      {item.tax_lines.map(taxDetail => (
                          <Text>{taxDetail.tax_authority}: {taxDetail.tax_amount}</Text>
                      ))}
                      </View>
                      <View style={[styles.colRight,{flexBasis:'75px'}]}>
                        <Text>{JSON.parse(item.price)+JSON.parse(item.tax_lines[0].tax_amount) }</Text>
                      </View>
  
                    </View>
                  ))}
          
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
                          <Text>{invoice.total}</Text>
                          {'\n'}
                          <Text>0.00</Text>
                          {'\n'}
                          <Text>{invoice.total}</Text>
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
                    {/* <a style={styles.button} href="mailto:ar@invp-lab.com">ar@invp-lab.com</a> */}
                    <Link src='mailto:ar@invp-lab.com'>
                      ar@invp-lab.com
                    </Link>
                  </Text>
                  {/*<Text style={styles.text}>*/}
                      {/*<Text style={styles.strong}>{'\n'}4. Click the button below to pay this invoice online.</Text> */}
                    {/* {'\n'} */}
                    {/* <a style={styles.button} href="https://money.sage.com/#/paynow/b333d35c-299b-4345-ba1e-d7c556159d60">
                      Pay Now
                    </a> */}
                    
                    
                    
                  {/*</Text> */}
                  {/*<View style={styles.button}>
                    <Link target="_blank" style={{color:'white',textDecoration:'none',fontSize:'12px'}} src='https://money.sage.com/#/paynow/b333d35c-299b-4345-ba1e-d7c556159d60'>
                      Pay Now
                    </Link>
                  </View>*/}
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
        </Fragment>
      )}
    </Fragment>
    )
}

export default Invoice;
