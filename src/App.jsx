import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: '#09090F',minHeight: 'auto',width:'auto', padding: '0',margin:'0',boxSizing:'border-box'}}>
      <div style={{padding:"10vw",marginLeft:'10vw'}} >
        <h1 style={{color:"#FFFFFF",fontSize:'35px',fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'}}>Report a Vulnerability</h1>
        <p className='para'>Date: September 27, 2023</p>
        <h2 className='title'>Reporting a Vulnerability</h2>
        <p className='para'>To report a security vulnerability, please email our security team at <a href='mailto:weareworko@gmail.com'>weareworko@gmail.com</a><div/>Please include the following information in your report:</p>
        <ol className='para'>
        <li><b>Description:</b> A detailed description of the vulnerability, including the affected component or feature.</li>
        <li><b>Steps to Reproduce:</b> Provide step-by-step instructions on how to reproduce the vulnerability.</li>
        <li><b>Impact:</b> Explain the potential impact or risks associated with the vulnerability.</li>
        <li><b>Your Contact Information:</b> Include your name and contact details (email or phone) so that we can get in touch with you regarding the report.</li>
        </ol>
        <h2 className='title'>Guidelines</h2>
        <p className='para'>We have a few important guidelines to ensure a responsible and efficient vulnerability disclosure process:</p>
        <ul className='para'>
        <li><b>Do Not Share Publicly:</b> Please do not disclose the vulnerability publicly until it has been resolved and you have received our confirmation.</li>
        <li><b>Do Not Exploit:</b> Do not attempt to exploit the vulnerability beyond what is necessary for your proof of concept.</li>
        <li><b>Respect Privacy:</b> Do not access, modify, or delete data that does not belong to you.</li>
        </ul>
        <h2 className='title'>What to Expect</h2>
        <ul className='para'>
          <li>We will acknowledge the receipt of your report and work to confirm the vulnerability.</li>
          <li>Our security team will assess the report, determine its severity, and develop a plan for remediation.</li>
          <li>Once the vulnerability is resolved, we will notify you and provide an opportunity for you to confirm the fix.</li>
          <li>Depending on the nature and impact of the vulnerability, you may be eligible for a security researcher recognition or reward, subject to our discretion.</li>
        </ul>
        <h2 className='title'>Legal</h2>
        <p className='para'>Worko is committed to abiding by relevant laws and regulations concerning security vulnerability disclosure. We will not pursue legal action against security researchers who report vulnerabilities responsibly.</p>
        <p className='para'>Please note that attempting to exploit or disclose vulnerabilities irresponsibly may result in legal action.</p>
        <p className='para'>Thank you for helping us keep Worko a secure platform for our users.</p>
      </div>
      
      
    </div>
  )
}

export default App
