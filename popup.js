  <script>
    const modal = document.querySelector(&quot;.modal&quot;);
const modalOverlay = document.querySelector(&quot;.modal-overlay&quot;);
const closeBtn = document.querySelector(&quot;.modal .close-btn&quot;);
const discountBtn = document.querySelector(&quot;.modal .discount-btn&quot;);

const createCookie = () =&gt; {
  let maxAge = &quot;;max-age=28800&quot;;
  let path = &quot;;path=/&quot;;
  document.cookie = &quot;live-blogger-popup=displayed&quot; + maxAge + path;
};

const displayModal = () =&gt; {
  if (document.cookie.indexOf(&quot;live-blogger-popup&quot;) == -1) {
    modal.classList.add(&quot;active&quot;);
    modalOverlay.classList.add(&quot;active&quot;);
    createCookie();
  }
};

setTimeout(() =&gt; {
  displayModal();
}, 2000);

closeBtn.addEventListener(&quot;click&quot;, () =&gt; {
  modal.classList.remove(&quot;active&quot;);
  modalOverlay.classList.remove(&quot;active&quot;);
});

discountBtn.addEventListener(&quot;click&quot;, () =&gt; {
  modal.classList.remove(&quot;active&quot;);
  modalOverlay.classList.remove(&quot;active&quot;);
});
  </script>
