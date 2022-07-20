import React from 'react'
import '../contact.css';
export default function ContactScreen() {
  return (
    <div class="container">            
        <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
        <h4>Bạn có bất kỳ câu hỏi nào liên quan đến SHOBEE? Liên hệ bằng cách sử dụng biểu mẫu bên dưới nhé!</h4>
        <form>
          <label for="fname">Tên của bạn</label>
          <input type="text" id="fname" name="fullname" placeholder="Tên của bạn.."/>

            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Địa chỉ Email của bạn.."/>

            <label for="phonenumber">Số điện thoại</label>
            <input type="text" id="lname" name="lastname" placeholder="Số điện thoại của bạn.."/>

            <label for="subject">Lời nhắn</label>          

            <textarea id="subject" name="subject" placeholder="Lời nhắn của bạn..." ></textarea> 

           <button name="send" type="send" id="contact-send" data-submit="...Sending">Gửi</button> 
          
        </form>
    </div>
  )
}
