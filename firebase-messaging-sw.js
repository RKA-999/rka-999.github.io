// Service Worker-এর জন্য Firebase SDK আমদানি (Import) করা।
// এখানে importScripts ব্যবহার করতে হবে, <script type="module"> নয়।
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// 1. Firebase কনফিগারেশন: শুধুমাত্র messagingSenderId প্রয়োজন
// আপনার Sender ID: 649844882266
const firebaseConfig = {
  messagingSenderId: "649844882266" 
};

// FirebaseInitialize
firebase.initializeApp(firebaseConfig);

// Messaging service চালু করা
const messaging = firebase.messaging();

// 2. Background Notification Handling (যখন সাইট বন্ধ থাকবে)
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // আপনি চাইলে একটি আইকন যোগ করতে পারেন:
    // icon: 'https://rka-999.github.io/adhekarijewellers/favicon.png' 
    data: payload.data
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
