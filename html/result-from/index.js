var tabledata = [
    {
        id: 0,
        ltGrd: 'A+',
        minum: '87',
        maxium: '95',
        grpoint: '5'
    },
    {
        id: 1,
        ltGrd: 'B+',
        minum: '50',
        maxium: '60',
        grpoint: '5'
    },
    {
        id: 2,
        ltGrd: 'A+',
        minum: '80',
        maxium: '90',
        grpoint: '5'
    },
    {
        id: 3,
        ltGrd: 'F',
        minum: '0',
        maxium: '33',
        grpoint: 'Fail'
    }

]

// Added data
function addData(obj) {
    tabledata.push(obj);
    return tabledata;
}

// edite data 
function editeData(newobj, indexd) {
    tabledata[indexd] = newobj;
    // console.log(tabledata);
    
    return tabledata;
}

// Show data

function showData(obj) {
    // $('.tblbdy').each(function () {
    //     $(this).remove();
    // })
    var tabledatass = obj.map(ele => {
        return (
            `<tr id =" ${ele.id}" >
            <th scope="row">${ele.ltGrd}</th>
            <td>${ele.minum}</td>
            <td>${ele.maxium}</td>
            <td>${ele.grpoint}</td>
            <td><button class="btn btn-primary editBtn" id="edddiit" data-toggle="modal" data-target="#exampleModalCenter" >Edit</button></td>
        </tr>`
        );
    })
    $('.tblbdy').append(tabledatass);

}

var idd = 202;
idd++;



$(document).ready(function () {
    showData(tabledata)
    // Added

    $('#submitFrom').click(function (e) {
        e.preventDefault();
        var selctleter = "<option selected>Select Letter Grade</option>"
        var ltGrade = $('#leterGrade').val();
        var minimum = $('#mimimum').val();
        var maximum = $('#maximum').val();
        var grPoint = $('#grPoint').val();
        if (minimum === "" || maximum === "") {
            alert('Enter the correct information')

        } else {
            idd++;
            var trData = `
                <tr id ="${idd}" >
                    <th scope="row">${ltGrade}</th>
                    <td>${minimum}</td>
                    <td>${maximum}</td>
                    <td>${grPoint}</td>
                    <td><button class="btn btn-primary editBtn" id="edddiit" data-toggle="modal" data-target="#exampleModalCenter" >Edit</button></td>
                </tr>
            `;
            $('.tblbdy').append(trData);

            addData({
                id: idd,
                ltGrd: ltGrade,
                minum: minimum,
                maxium: maximum,
                grpoint: grPoint
            })
            console.log(tabledata);
        }

        var ltGrade = $('#leterGrade').append(selctleter);
        var minimum = $('#mimimum').val("");
        var maximum = $('#maximum').val("");
        var grPoint = $('#grPoint').val("");
    });

    // edite

    $('tbody').on('click','td #edddiit',function (e) {
        $('.my_from .form-group').each(function () {
            $(this).remove();
        })
       console.log(tabledata);
        var htmlColect = e.currentTarget.parentNode.parentNode.children;
        var selectId = e.currentTarget.parentNode.parentNode;
        var fid = (selectId.id);
        var length = htmlColect.length - 1;
        var dataArry = [];


        var indx = tabledata.findIndex(ele => ele.id == fid);


        for (var i = 0; i < length; i++) {
            dataArry.push(htmlColect[i].innerText);
        }
        var ltrGrade = dataArry[0];
        var modaldata = `
             <div class="form-group">
                              <label for="modalgrade">Letter Grade</label>
                              <select class="custom-select form-control" id="modalgrade">
                                  <option selected>${ltrGrade}</option>
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
                              <label for="modalmax"> Maximum Number</label>
                              <input type="text" value="${dataArry[2]}" class="form-control" id="modalmax">
                          </div>
                          <div class="form-group">
                              <label for="grtpoint"> Great Point</label>
                              <input type="text" value="${dataArry[3]}" class="form-control" id="grtpoint">
                          </div>
                          `;

        $('.my_from').append(modaldata);

        $('#editSubmit').unbind('click').bind('click', function (e) {
           
            e.preventDefault();
            var objid = tabledata[indx].id;
            console.log(tabledata[indx]);
            
            var ltrGrde = $('#modalgrade').val();
            var minn = $('#minimumnuber').val();
            var mmax = $('#modalmax').val();
            var gPoint = $('#grtpoint').val();
            var newobj = {
                id: objid,
                ltGrd: ltrGrde,
                minum: minn,
                maxium: mmax,
                grpoint: gPoint

            }
            editeData(newobj, indx)
            console.log(tabledata);
            $('#modalgrade').val("");
            $('#minimumnuber').val("");
            $('#grtpoint').val("");
            $('#grtpoint').val("");
            htmlColect[0].innerText =ltrGrde;
            htmlColect[1].innerText =minn;
            htmlColect[2].innerText =mmax;
            htmlColect[3].innerText =gPoint;
            console.log(tabledata);

        })


    })


})