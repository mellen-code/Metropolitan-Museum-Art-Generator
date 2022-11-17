document.querySelector('button').addEventListener('click', showArt);

  
  function showArt () {
    
      let departmentID = document.querySelector('select').value;
      

  // Department chosen randomly if user selects 'any' 
        if (departmentID === '0') {
          departmentID = Number(Math.ceil(Math.random()*21));
        }
        else if (departmentID === 2 || this.departmentID === 20)
            departmentID += 1;
      
      console.log(departmentID);



  // // Randomly select a piece of art, based on department selected. 

        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departmentID}&q=art`) 
              .then(res => res.json())
              .then(data => {
                  let choice = data.objectIDs[Math.floor(Math.random()*(data.objectIDs.length))];
                  console.log(data);
                  console.log(choice);
              


// Show the selected art's picture and info in the DOM.

            return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${choice}`) 
                .then(res => res.json())

                .catch(err => {
                  console.log(`error ${err}`)
                })

                .then(data => {
                    console.log(data)

                    document.querySelector('#artTitle').innerText = data.title;

                    if (data.title == "") {
                      document.querySelector('#artTitle').innerText = 'Title Unknown'
                    }

                    document.querySelector('#artist').innerText = 'Artist: '+data.artistDisplayName

                    if (data.artistDisplayName == "") {
                      document.querySelector('#artist').innerText = 'Artist Unknown'
                    }

                    document.querySelector('#date').innerText = 'Date: '+data.objectDate

                    if (data.objectDate == "") {
                      document.querySelector('#date').innerText = "Date Unknown"
                    }

                    document.querySelector('#culture').innerText = 'Culture: ' +data.culture

                    if (data.culture == "") {
                      document.querySelector('#culture').innerText = ""
                    }

                    document.querySelector('#museumLink').innerText = 'Museum link: '

                    document.querySelector('a').innerText = data.objectURL

                    document.querySelector('a[href]').setAttribute('href', data.objectURL)


                    if (data.objectURL == "") {
                      document.querySelector('a').innerText = "Museum link unavailable"
                    }
                  
                  
                    document.querySelector('#noImage').innerText = ""

                    document.querySelector('img').src = data.primaryImageSmall

                    if (data.primaryImageSmall == "") {
                      document.querySelector('#noImage').innerText = "No image available"
                    }
                  })
                });                     
      };
                    




