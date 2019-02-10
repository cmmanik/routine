$(document).ready(function(){
    var tabledata = [
        {
            id: 0,
            ltGrd:'A+',
            minum:'87',
            maxium: '95',
            grpoint: '5'
        },
        {
            id: 1,
            ltGrd:'B+',
            minum:'50',
            maxium: '60',
            grpoint: '5'
        },
        {
            id: 2,
            ltGrd:'A+',
            minum:'80',
            maxium: '90',
            grpoint: '5'
        },
        {
            id: 3,
            ltGrd:'F',
            minum:'0',
            maxium: '33',
            grpoint: 'Fail'
        }
    
    ]
    
    
        var idd = 0;
        idd++; 
       
    var tabledatass = tabledata.map(ele => {
        return (
            `<tr id =" ${ele.id}" >
            <th scope="row">${ele.ltGrd}</th>
            <td>${ele.minum}</td>
            <td>${ele.maxium}</td>
            <td>${ele.grpoint}</td>
            <td><button class="btn btn-primary editBtn" data-toggle="modal" data-target="#exampleModalCenter" >Edit</button></td>
        </tr>`
        );
    })
    
    $('.tblbdy').append(tabledatass);
    
    
    // Added
    
    $('#submitFrom').click(function(e){        
            e.preventDefault();
            var selctleter = "<option selected>Select Letter Grade</option>"
            var ltGrade = $('#leterGrade').val();
            var minimum = $('#mimimum').val();
            var maximum = $('#maximum').val();
            var grPoint = $('#grPoint').val();
            if(minimum === "" || maximum === "") {
                alert('Enter the correct information')
                
            } else {
                idd++;
                var trData  = `
                <tr id ="${idd}" >
                    <th scope="row">${ltGrade}</th>
                    <td>${minimum}</td>
                    <td>${maximum}</td>
                    <td>${grPoint}</td>
                    <td><button class="btn btn-primary editBtn" data-toggle="modal" data-target="#exampleModalCenter" >Edit</button></td>
                </tr>
            `;
            $('.tblbdy').append(trData);
            }
            tabledata.push({
                id:idd,
                ltGrd:ltGrade,
                minum:minimum,
                maxium: maximum,
                grpoint: grPoint
            })
            var ltGrade = $('#leterGrade').append(selctleter);
            var minimum = $('#mimimum').val("");
            var maximum = $('#maximum').val("");
            var grPoint = $('#grPoint').val("");
            
        $('.editBtn').on('click',function(e){
            alert(e)
            $('.my_from .form-group').each(function(){
                $(this).remove();
            })
              // console.log(e.currentTarget.parentNode.parentNode.parentNode.rows);
              var htmlColect = e.currentTarget.parentNode.parentNode.children;
              var selectId = e.currentTarget.parentNode.parentNode;
              var fid = (selectId.id);
              var length = htmlColect.length - 1;
              var dataArry = [];
              
             
             for(var i=0; i< length; i++  ) {
                 dataArry.push(htmlColect[i].innerText);
             }
               
             var modaldata = `
             <div class="form-group">
                              <label for="formGroupExampleInput">Letter Grade</label>
                              <select class="custom-select form-control" id="leterGrade">
                                  <option selected>Select Letter Grade</option>
                                  <option value="A++">A++</option>
                                  <option value="A+">A+</option>
                                  <option value="A">A</option>
                                  <option value="A-">A-</option>
                                  <option value="B+">B+</option>
                                  <option value="B-">B-</option>
                                  <option value="B">B</option>
                                  <option value="C">C</option>
                                  <option value="C+">C+</option>
                                  <option value="C-">C-</option>
                                  <option value="D+">D+</option>
                                  <option value="D-">D-</option>
                                  <option value="D">D</option>
                                  <option value="F">F</option>
                              </select>
                          </div>
                          <div class="form-group">
                              <label for="minimumnuber"> Minimum Number</label>
                              <input type="text" value="${dataArry[1]}" class="form-control" id="minimumnuber">
                          </div>
                          <div class="form-group">
                              <label for="maximum"> Maximum Number</label>
                              <input type="text" value="${dataArry[2]}" class="form-control" id="maximum">
                          </div>
                          <div class="form-group">
                              <label for="grtpoint"> Greate Point</label>
                              <input type="text" value="${dataArry[3]}" class="form-control" id="grtpoint">
                          </div>
                          `;
        
             $('.my_from').append(modaldata);
        
             $('#editSubmit').click(function(e) {
                 e.preventDefault();      
             })
            
          })
    
        });
    
    // edite
    
         $('.editBtn').on('click',function(e){
             console.log(e)
        //     $('.my_from .form-group').each(function(){
        //         $(this).remove();
        //     })
        //       // console.log(e.currentTarget.parentNode.parentNode.parentNode.rows);
        //       var htmlColect = e.currentTarget.parentNode.parentNode.children;
        //       var selectId = e.currentTarget.parentNode.parentNode;
        //       var fid = (selectId.id);
        //       var length = htmlColect.length - 1;
        //       var dataArry = [];
              
             
        //      for(var i=0; i< length; i++  ) {
        //          dataArry.push(htmlColect[i].innerText);
        //      }
               
        //      var modaldata = `
        //      <div class="form-group">
        //                       <label for="formGroupExampleInput">Letter Grade</label>
        //                       <select class="custom-select form-control" id="leterGrade">
        //                           <option selected>Select Letter Grade</option>
        //                           <option value="A++">A++</option>
        //                           <option value="A+">A+</option>
        //                           <option value="A">A</option>
        //                           <option value="A-">A-</option>
        //                           <option value="B+">B+</option>
        //                           <option value="B-">B-</option>
        //                           <option value="B">B</option>
        //                           <option value="C">C</option>
        //                           <option value="C+">C+</option>
        //                           <option value="C-">C-</option>
        //                           <option value="D+">D+</option>
        //                           <option value="D-">D-</option>
        //                           <option value="D">D</option>
        //                           <option value="F">F</option>
        //                       </select>
        //                   </div>
        //                   <div class="form-group">
        //                       <label for="minimumnuber"> Minimum Number</label>
        //                       <input type="text" value="${dataArry[1]}" class="form-control" id="minimumnuber">
        //                   </div>
        //                   <div class="form-group">
        //                       <label for="maximum"> Maximum Number</label>
        //                       <input type="text" value="${dataArry[2]}" class="form-control" id="maximum">
        //                   </div>
        //                   <div class="form-group">
        //                       <label for="grtpoint"> Greate Point</label>
        //                       <input type="text" value="${dataArry[3]}" class="form-control" id="grtpoint">
        //                   </div>
        //                   `;
        
        //      $('.my_from').append(modaldata);
        
        //      $('#editSubmit').click(function(e) {
        //          e.preventDefault();      
        //      })
            
         })
    
    
    
    
    
})