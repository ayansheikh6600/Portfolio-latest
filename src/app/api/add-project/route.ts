import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import PortfolioProject from '../../../models/Portfolio';
import nodemailer from 'nodemailer';

export const POST = async(req:Request, res:any) => {
    const body = await req.json();
//   const { method } = req;
console.log(body);
//   console.log(method);
  

  await dbConnect();


   
      try {
        const form = await PortfolioProject.create(body);

        
        

        // // Nodemailer setup
        // const transporter = nodemailer.createTransport({
        //   service: 'Gmail',
        //   auth: {
        //     user: process.env.GMAIL_USER,
        //     pass: process.env.GMAIL_PASS,
        //   },
        // });

        // const mailOptions = {
        //   from: process.env.GMAIL_USER,
        //   to: process.env.RECIPIENT_EMAIL,
        //   subject: 'New Contact Form Submission',
        //   text: `You have a new form submission: \n\n
        //   First Name: ${body.firstName} \n
        //   Last Name: ${body.lastName} \n
        //   Email: ${body.email} \n
        //   Phone: ${body.phone} \n
        //   Service: ${body.service} \n
        //   Message: ${body.message}`,
        // };

        // await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { data:form },
            { status: 201 }
          );

        
      } catch (error) {
        return NextResponse.json(
            { succes: false },
            { status: 400 }
          );
        
      }
 
 
   
  
}
