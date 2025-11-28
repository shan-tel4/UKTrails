$(document).ready(function() {
    const $navBar = $('#navbar');
  
    // Toggle menu function
    window.toggleMenu = function(button) {
      const $button = $(button);
      $button.toggleClass('is-active');
  
      if ($button.hasClass('is-active')) {
        $navBar.css('right', '0');
      } else {
        $navBar.css('right', '-250px');
      }
    };
  
    // Smooth scroll with offset for .hero-btn links
    $('a.hero-btn[href^="#"]').on('click', function(e) {
      e.preventDefault();
      const target = $($(this).attr('href'));
  
      if (target.length) {
        const offset = 100; // pixels to offset
        const top = target.offset().top - offset;
  
        $('html, body').animate({ scrollTop: top }, 600); // smooth scroll
      }
    });

    // Map Section
    /* ========== UK Trails: Leaflet Map + Fancybox 3 Popups ========== */
    (function ($) {
      // Only run on the Trails page if the container exists
      $(function () {
        var $mapEl = $('#uktrails-map');
        if (!$mapEl.length || typeof L === 'undefined' || typeof $.fancybox === 'undefined') return;

        // Create the map centred broadly on England
        var map = L.map('uktrails-map', { scrollWheelZoom: true }).setView([52.8, -1.3], 8);

        // Basemap tiles (OpenStreetMap)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
        }).addTo(map);

        // ---- Replace this array with your real trail locations ----
        var locations = [
          {
            coords: [50.735, -3.414], // Example: Dartmoor
            title: 'Dartmoor Way',
            image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
            text: 'Granite tors, open moorland and dramatic skies. A rugged loop for seasoned walkers.',
            buttonText: 'View trail',
            buttonUrl: '#'
          },
          {
            coords: [54.454, -2.966], // Lake District-ish
            title: 'Helvellyn Ridge',
            image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop',
            text: 'A classic scramble with sweeping views across Ullswater and Thirlmere.',
            buttonText: 'See route',
            buttonUrl: '#'
          },
          {
            coords: [50.950, -0.140], // South Downs
            title: 'Seven Sisters Cliffs',
            image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
            text: 'Iconic chalk cliffs and rolling downs. Windy but unforgettable.',
            buttonText: 'Trail info',
            buttonUrl: '#'
          },
          {
            coords: [51.511, -0.123], // London example
            title: 'Thames Path (Central)',
            image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop',
            text: 'Easy city stretch with big landmarks and river views.',
            buttonText: 'Open guide',
            buttonUrl: '#'
          }
        ];
        // -----------------------------------------------------------

        function buildCardHTML(loc) {
          return (
            '<article class="map-card" role="dialog" aria-label="' + loc.title + '">' +
              '<img class="map-card__media" src="' + loc.image + '" alt="' + loc.title + '">' +
              '<div class="map-card__body">' +
                '<h3 class="map-card__title">' + loc.title + '</h3>' +
                '<p class="map-card__text">' + loc.text + '</p>' +
                '<div class="map-card__actions">' +
                  '<a class="btn btn--primary" href="' + loc.buttonUrl + '" target="_blank" rel="noopener">' + loc.buttonText + '</a>' +
                '</div>' +
              '</div>' +
            '</article>'
          );
        }

        // Add markers + click handlers
        var bounds = [];
        locations.forEach(function (loc) {
          var marker = L.marker(loc.coords, { title: loc.title }).addTo(map);
          marker.bindTooltip(loc.title, { direction: 'top', offset: [0, -6] });
          bounds.push(loc.coords);

          marker.on('click', function () {
            $.fancybox.open({
              src: buildCardHTML(loc),
              type: 'html',
              smallBtn: true,
              animationEffect: 'zoom',
              baseClass: 'map-fancybox'
            });
          });
        });

        if (bounds.length) {
          var latLngBounds = L.latLngBounds(bounds);
          map.fitBounds(latLngBounds.pad(0.2));
        }
      });
    })(jQuery);

});