// TO DO:
  // 
  // Add an 'any' choice.
  // Option to star the favorites. Favorites are put in localStorage.
  // Favorites are listed in the DOM, along with art info PLUS Department & Met url.
  // Style the page!
    


  document.querySelector('button').addEventListener('click', showArt);
  
  
  function showArt() {
    let departmentID = document.querySelector('select').value;

    if (departmentID == 'random') {
      departmentID == (Math.floor(Math.random()*21));
      return departmentID;
    }

    console.log(departmentID)

  // // Select randomly what piece of art to show on DOM, based on department selected. 
  //     fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departmentID}&q=art`) 
  //           .then(res => res.json())
  //           .then(data => {
  //               console.log(data)
  //               choice = data.objectIDs[Math.floor(Math.random()*(data.objectIDs.length))];
  //               console.log(choice)

  //               fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${choice}`) 
  //                   .then(res => res.json())
  //                   .then(data => {
  //                       console.log(data)

  //                       document.querySelector('h3').innerText = 'Title: ' +data.title

  //                       document.querySelector('h4').innerText = 'Artist: '+data.artistAlphaSort

  //                       document.querySelector('#date').innerText = 'Date: '+data.objectDate

  //                       document.querySelector('#period').innerText = 'Period: ' +data.period

  //                       function imageAvailable() {
  //                         document.querySelector('#noImage').innerText = "";
  //                         document.querySelector('img').src = "";

  //                         if (data.primaryImageSmall === "") {
  //                           document.querySelector('#noImage').innerText = 'Image currently not available'
                            
  //                         }else {
  //                           document.querySelector('img').src = data.primaryImageSmall
  //                         };
  //                       }

  //                       imageAvailable()
                      
  //                   })
            
  //             .catch(err => {
  //                 console.log(`error ${err}`)
  //             })
                
            
                
  //           })
            
  //             .catch(err => {
  //                 console.log(`error ${err}`)
  //             });
    
     
  
  
    
  
  };