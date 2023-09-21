function sendNtfy() {
  var tableNo = document.getElementById("tableNo").value;
  var messageSend = document.getElementById("message").value;

  // Do whatever you want with the values of selectValue and textareaValue here.
  fetch('https://ntfy.sustento.my/dpmk', {
          method: 'POST', // PUT works too
          body: 'Customer meja ' + tableNo + ' panggil dengan pesanan ' + messageSend + '',
          headers: {
            'Authorization': 'Bearer tk_g8lp0ni06lnzc723n0lchi3fv5i8t'
          }
      })  
  
}
  const getRandomWebsite = () => {
    const websites = [
      '<a rel="nofollow" href="https://invol.co/cljr99l"><img src="https://img.involve.asia/rpss/campaigns_banners/1650264050-jteIjFFrZu653wbc1mWeIkwCqd0wmoix.png"></a>',
      '<a rel="nofollow" href="https://invle.co/cljr99r"><img src="https://img.involve.asia/rpss/campaigns_banners/1693795584-jLovi1TIDQ99RlLE4YLRl105ok3R8JjF.jpg"></a>',
      '<a rel="nofollow" href="https://invol.co/cljr99u"><img src="https://img.involve.asia/rpss/campaigns_banners/1693799373-w6BsdIwEt8UycPuVYZK5OUyjoV2CdqWy.jpg"></a>',
      '<a rel="nofollow" href="https://invol.co/cljr9a7"><img src="https://img.involve.asia/rpss/campaigns_banners/1687858235-5z0NoKCxIHmwOjLBtM7LZein4MxiERlj.jpg"></a>',
      '<a rel="nofollow" href="https://invol.co/cljr9ah"><img src="https://img.involve.asia/rpss/campaigns_banners/69193-jAnwUVl7aE0hpvseAYVFgDc61UWF8EVZ.png"></a>',
      '<a rel="nofollow" href="https://invol.co/cljr9as"><img src="https://img.involve.asia/rpss/campaigns_banners/74761-2PFfIsgQHHaFSVTTJpo4aAcSKvLunc0o.jpg"></a>',
      
    ];
    return websites[Math.floor(Math.random() * websites.length)];
  };

  const randomWebsite = getRandomWebsite();
   document.getElementById('random-website').innerHTML = randomWebsite;  
   //document.getElementById('random-website').innerHTML = '<a href="' + randomWebsite + '">' + randomWebsite + '</a>';
