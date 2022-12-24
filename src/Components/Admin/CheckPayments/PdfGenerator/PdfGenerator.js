import React, { useState, useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import AdminSidebar from "../../AdminSidebar/AdminSidebar";
import { API_URL } from "../../../Constants/Constant";
import { useParams } from "react-router-dom";

const PdfGenerator = () => {
  const [invoiceData, setInvoiceData] = useState([]);
  let { id } = useParams();
  //console.log("My Id", id);

  useEffect(() => {
    getInvoiceData();
    // eslint-disable-next-line
  }, []);

  const getInvoiceData = () => {
    fetch(API_URL + "/getPayment")
      .then((res) => res.json())
      .then((data) => {
        let filData = [];
        try {
          if (!id) {
            return;
          } else {
            filData = data.filter((oneData) => oneData._id === id);
          }
        } catch (e) {
          console.log(e);
        }
        setInvoiceData(filData[0].paymentData);
      });
  };

  console.log(invoiceData[0]);

  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#ffffff",
      border: "1px solid black",
      padding: "40px",
    },
    section: {
      display: "flex",
      flexDirection: "column",
      margin: 10,
      padding: 10,
    },
    titleSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    companyAdress: {
      display: "flex",
      flexDirection: "column",
      fontSize: "15px",
    },
    title: {
      fontWeight: "bold",
    },
    line: {
      borderBottom: "1px solid blue",
      marginTop: "15px",
    },
    subTitle: {
      color: "blue",
    },
    titleInv: {
      fontWeight: "bold",
      fontSize: "25px",
    },
    section2: {
      display: "flex",
      flexDirection: "column",
      margin: 10,
      padding: 10,
    },
    firstSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    subSection: {
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
    },
  });

  const CreatePdf = () => {
    return (
      <>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.titleSection}>
              <Text style={styles.titleInv}>INVOICE</Text>
            </View>

            <View style={styles.firstSection}>
              <View style={styles.companyAdress}>
                <Text style={styles.subTitle}>Billed To</Text>
                <Text>{invoiceData[0]?.name}</Text>
                <Text>12345, Duisburg</Text>
                <Text>Phone:{invoiceData[0]?.phone}</Text>
              </View>
            </View>

            <View style={styles.line}></View>

            <View style={styles.section2}>
              <View style={styles.firstSection}>
                <Text>Invoice Number:</Text>
                <Text>{invoiceData[0]?._id}</Text>
              </View>

              <View style={styles.firstSection}>
                <Text>Order Date:</Text>
                <Text>{invoiceData[0]?.date}</Text>
              </View>

              <View style={styles.firstSection}>
                <Text>Service:</Text>
                <Text>{invoiceData[0]?.service}</Text>
              </View>

              <View style={styles.firstSection}>
                <Text>Amount</Text>
                <Text>{invoiceData?.amount}€</Text>
              </View>

              <View style={styles.firstSection}>
                <Text>Tax-15%</Text>
                <Text>{parseFloat(invoiceData?.amount) * 0.15}€</Text>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.firstSection}>
              <Text>Total</Text>
              <Text>
                {parseFloat(invoiceData?.amount) * 0.15 +
                  parseFloat(invoiceData?.amount)}
                €
              </Text>
            </View>

            <View style={styles.subSection}>
              <Text>Note</Text>
              <Text>Thanks for purchasing the service</Text>
              <Text style={styles.companyAdress}>
                <span style={styles.title}>Prism Photography</span>
                <span>Düsseldorf Str 16</span>
                <span>45128, Düsseldorf </span>
                <span>Germany</span>
              </Text>
            </View>
          </Page>
        </Document>
      </>
    );
  };

  return (
    <div className="row admin">
      <div className="col-md-2">
        <AdminSidebar></AdminSidebar>
      </div>

      <div className="col-md-9 ml-5 mt-5 mb-5">
        <PDFDownloadLink document={<CreatePdf />} filename="FORM">
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button className="btn btn-success">Download Pdf</button>
            )
          }
        </PDFDownloadLink>
        <CreatePdf />
      </div>
    </div>
  );
};

export default PdfGenerator;
