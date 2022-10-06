// TO DO:
  // 
  // Favorites are listed in the DOM, along with art info PLUS Department & Met url.
  // Favorites are kept in localStorage for next session.
  // Style the page - custom background for each dept (including 'Go to Favorites' button)
    


  document.querySelector('button').addEventListener('click', showArt);

  document.querySelector('.favoriteButton').addEventListener('click', addToFav);
  
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
                      
                    })
            
              .catch(err => {
                  console.log(`error ${err}`)
              })
                
            
                
            })
            
            .catch(err => {
              console.log(`error ${err}`)
          });
  };


  function addToFav() {
    
  }