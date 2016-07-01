
    (function(d, className) {
		  var textColor = "#cc2731";
      var container = d.getElementsByClassName(className)[0];
		  var apiData = [
			  {
          text: 'Barcelona Cathedral',
          geo: {
            lat: 41.38333333333333,
            lon: 2.183333333333333
          }
        },
        {
          text: 'Gothic Quarter'
        },
        {
          text: 'Barcelona'
        },
        {
          text: 'Cathedral de la Santa Cruz'
        },
        {
          text: 'La Boquieria'
        },
        {
          text: 'Ronda de Sant Pere'
        },
        {
          text: 'Las Ramblas'
        },
        {
          text: 'Barri Gòtic'
        }
      ];
      function onMouseOut(event) {
        //this is the original element the event handler was assigned to
        var e = event.toElement || event.relatedTarget;
        if (e.parentNode == this || e == this) {
           return;
        }
      
      }
      
      var findText = function(element, pattern, callback) {

      };

		  if(container) {
        document
          .querySelector('.tagible-text-tooltiptext')
          .addEventListener('mouseout',function(e) {
            console.log('mouseout');
              var e = e.toElement || e.relatedTarget;
              if (e.parentNode == this || e == this) {
                return;
              }
              document.querySelector('.tagible-text-tooltiptext').style.display = 'none';
            },true);
        document
          .querySelector('.tagible-text')
          .addEventListener('mouseover', function(e) {
            if (e.target.children[0] != void 0) {
              e.target.children[0].style.display = 'inline';
            }
          }, true );
		  }
  }(document, 'whatsincluded'));