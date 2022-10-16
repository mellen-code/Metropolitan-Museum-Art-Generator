// TO DO:
  // // FINISH: Store what's in the DOM to store MULTIPLE favorites in localStorage for next session (see title). Plus complete for the remaining 3 favorite slots.

  // The same MULTIPLE Favorites are saved in the DOM, along with art info.
  
  // Style the page - custom background for each dept (including 'Go to Favorites' button)
    


  document.querySelector('button').addEventListener('click', showArt);

  
  function showArt() {
  // Pull departmentID; dept chosen randomly if user selects 'any'.
    let departmentID = document.querySelector('select').value;

      function randomPick() {
        if (departmentID === '0') {
          departmentID = Number(Math.ceil(Math.random()*21));
          console.log(departmentID)
        }
          if (departmentID === 2 || departmentID === 20)
            departmentID += 1;
    }

      randomPick();

    console.log(departmentID)

  // // Select randomly piece of art, based on department selected. 
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departmentID}&q=art`) 
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let choice = data.objectIDs[Math.floor(Math.random()*(data.objectIDs.length))];
                console.log(choice)

// Show the selected art's picture and info in the DOM, pulled from the 2nd API link:
                fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${choice}`) 
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        document.querySelector('h3').innerText = 'Title: ' +data.title

                        document.querySelector('h4').innerText = 'Artist: '+data.artistAlphaSort

                        document.querySelector('#date').innerText = 'Date: '+data.objectDate

                        document.querySelector('#period').innerText = 'Period: ' +data.period

                        document.querySelector('#museumURL').innerText = data.objectURL

                        function imageAvailable() {
                          document.querySelector('#noImage').innerText = "";
                          document.querySelector('img').src = "";

                          if (data.primaryImageSmall === "") {
                            document.querySelector('#noImage').innerText = 'Image currently not available'
                            
                          }else {
                            document.querySelector('img').src = data.primaryImageSmall
                          };
                        }

                        imageAvailable();

// make favorite button visible
                        
                        const favorite = document.querySelector('.favoriteButton')

                        function displayFavorite () {
                          favorite.classList.remove('hidden')
                        }
                        
                        displayFavorite();


// When fav button is clicked, art info is stored in localStorage:
                        document.querySelector('.favoriteButton').addEventListener('click', addToFav);

                        function addToFav() {
                          if(!localStorage.getItem('link') && !localStorage.getItem('image')) {

                            localStorage.setItem('image', data.primaryImageSmall);
                        
                            localStorage.setItem('title', document.querySelector('h3').innerText);

                            localStorage.setItem('artist', data.artistAlphaSort);

                            localStorage.setItem('link', data.objectURL);
                          }
                          
                          else if (localStorage.getItem('link') || localStorage.getItem('image')){
                            addToFav2();
                          };
                          }

                        function addToFav2() {
                          if(!localStorage.getItem('link2') && !localStorage.getItem('image2')) {
  
                            localStorage.setItem('image2', data.primaryImageSmall);
                          
                            localStorage.setItem('title2', document.querySelector('h3').innerText);
  
                            localStorage.setItem('artist2', data.artistAlphaSort);
  
                            localStorage.setItem('link2', data.objectURL);
                          }
                            
                          else if (localStorage.getItem('link2') || localStorage.getItem('image2')){
                            addToFav3();
                          };
                          }

                          function addToFav3() {
                            if(!localStorage.getItem('link3') && !localStorage.getItem('image3')) {
    
                              localStorage.setItem('image3', data.primaryImageSmall);
                            
                              localStorage.setItem('title3', document.querySelector('h3').innerText);
    
                              localStorage.setItem('artist3', data.artistAlphaSort);
    
                              localStorage.setItem('link3', data.objectURL);
                            }
                              
                            else if (localStorage.getItem('link3') || localStorage.getItem('image3')){
                              addToFav4();
                              
                            };
                            }

                          function addToFav4() {
                            if(!localStorage.getItem('link4') && !localStorage.getItem('image4')) {
      
                              localStorage.setItem('image4', data.primaryImageSmall);
                              
                              localStorage.setItem('title4', document.querySelector('h3').innerText);
      
                              localStorage.setItem('artist4', data.artistAlphaSort);
      
                              localStorage.setItem('link4', data.objectURL);
                            }
                                
                            else if (localStorage.getItem('link4') || localStorage.getItem('image4')){
                              addToFav5();
                            };
                            }

                            function addToFav5() {
                              if(!localStorage.getItem('link5') && !localStorage.getItem('image5')) {
        
                                localStorage.setItem('image5', data.primaryImageSmall);
                                
                                localStorage.setItem('title5', document.querySelector('h3').innerText);
        
                                localStorage.setItem('artist5', data.artistAlphaSort);
        
                                localStorage.setItem('link5', data.objectURL);
                              }
                                  
                              else if (localStorage.getItem('link5') || localStorage.getItem('image5')){
                                console.log("Favorites are Full")
                              };
                              }


                          

// Testing if localStorage can be used to keep info in the DOM. At this point, it doesn't save between browser sessions:
                          document.querySelector('#title').innerText = localStorage.getItem('title')

                        }

                      
                    )
            
              .catch(err => {
                  console.log(`error ${err}`)
              })
                
            
                
            })
            
            .catch(err => {
              console.log(`error ${err}`)
          });
        };