"use strict";
const btnMark = document.querySelector('#btn-MarkRead')
const notificationNum = document.querySelector('#notification-num')
const unreadMessages = document.querySelectorAll('.unread');

const pop =Array.from(document.querySelectorAll('.pop'));
const unreadArr = Array.from(unreadMessages);

notificationNum.textContent = unreadArr.length;

//function
    function clickUnread(e) {
        e.currentTarget.querySelector('.pop')?.remove();
        e.currentTarget.classList.remove('unread');
        unreadArr.length--;
        notificationNum.textContent = unreadArr.length;
    }


unreadArr.forEach(e => {
 e.addEventListener('click', clickUnread); 
})

btnMark.addEventListener('click', e => {
    unreadArr.forEach(e => {
        e.classList.remove('unread');
        e.querySelector('.pop')?.remove();
        pop.forEach(el =>{
            el.style.display = 'none';
        } );
        pop.splice(0,pop.length)
       notificationNum.textContent = pop.length;
    })
})