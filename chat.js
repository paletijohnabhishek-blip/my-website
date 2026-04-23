(function(n,u){
  window.CXoneDfo=n,
  window[n]=window[n]||function(){(window[n].q=window[n].q||[]).push(arguments)},window[n].u=u,
  e=document.createElement("script"),e.type="module",e.src=u+"?"+Math.round(Date.now()/1e3/3600),
  document.head.appendChild(e)
})('cxone','https://web-modules-de-na1.niceincontact.com/loader/1/loader.js');

cxone('init', '5513');
cxone('guide', 'init', 'aeb3a484-10c5-4780-a876-21e587f5bb40');
cxone('chat','setCustomCss', "[data-selector=\"ACTIVITY_BAR\"] {display: none !important}");
cxone('chat','setTranslations', {
  onlineFormText: 'Thank you for contacting AMI Training Centers Support. Please enter your information below and click “Begin Conversation”.'
});

// Instead of showTermsOfUse modal, inject Terms of Use inline
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("userForm");
  if(form){
    const terms = document.createElement("p");
    terms.innerHTML = `By clicking on "Begin Conversation", I consent to the collection, use, and disclosure of my personal information to receive communications regarding its products, programs, services, clinical trials, research opportunities and for online targeted advertising, as further described in the "How we may use Personal Data," "How we disclose Personal Data," and "Cookies and similar tracking and data collection technologies" sections of our Privacy Notice at 
    <a href="https://.ie/corpprivacy" target="_blank">Privacy Notice</a>. 
    For information on the personal data categories we collect, the purposes for their collection, disclosures to third parties, and data retention, visit 
    <a href="https://.ie/PrivacyPatient" target="_blank">Privacy Patient Notice</a>.`;
    form.appendChild(terms);
  }
});

// Keep CXone fields ready
cxone('chat','setCustomerName', ''); 
cxone('chat','setCustomField', 'phonenumber', '');
cxone('chat','setCustomField', 'email', '');
