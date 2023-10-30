// to calculate the final result
function calculateBill(total, tip_per, total_people) {
    if (parseFloat(total) === null || parseInt(total) === 0 || total === '') {
        document.querySelector('.total_bill').innerHTML = "Can't be zero";
        // document.querySelector('#total_people').classList.add('red');
    } else {
        document.querySelector('.total_bill').innerHTML = "";
        if (parseFloat(total_people) === null || parseInt(total_people) === 0 || total_people === '') {
            document.querySelector('.total_people').innerHTML = "Can't be zero";
            // document.querySelector('#total_people').classList.add('red');
        } else {
            document.querySelector('.total_people').innerHTML = "";
            // document.querySelector('#total_people').classList.remove('red');

            let tip_per_person = (parseFloat(total) * (parseFloat(tip_per) / 100)) / total_people;
            let total_amt = (parseFloat(total) + parseFloat(total) * (parseFloat(tip_per) / 100)) / total_people;
            document.querySelector('#tip-amt').innerHTML = tip_per_person.toFixed(2);
            document.querySelector('#total').innerHTML = total_amt.toFixed(2);
        }
    }
}


// to get all values
function getValues() {
    let bill = document.querySelector('#total_bill').value;
    let total_people = document.querySelector('#total_people').value;
    let tip;
    if (document.querySelector('.active') === null) {
        tip = 0;
    } else {
        tip = document.querySelector('.active').value;
        tip = Math.floor(tip);
        // console.log(tip)
    }
    calculateBill(bill, tip, total_people)
}


// to check for tip %
let tips = document.querySelectorAll('.tip_percent');
Array.from(tips).forEach((tip) => {
    tip.addEventListener('click', (e) => {
        tips.forEach((s) => { s.classList.remove('active') })
        if (!e.target.classList.contains('active')) {
            e.target.classList.add('active')
        }
    })
})


// to reset all values
document.querySelector("#reset_btn").addEventListener('click', () => {
    document.querySelector('#total_bill').value = null;
    document.querySelector('#total_people').value = null;
    document.querySelector('#custom_disc').value = null;

    Array.from(tips).forEach(() => {
        tips.forEach((s) => { s.classList.remove('active') })
    })

    document.querySelector('#tip-amt').innerHTML = 0.00;
    document.querySelector('#total').innerHTML = 0.00;
})

// to call getValues function which will will run the program
Array.from(document.querySelectorAll('.tip_percent')).forEach((tip) => {
    tip.addEventListener('click', () => {
        getValues();
    })
})
document.querySelector('#total_bill').addEventListener('keyup', () => {
    getValues();
})
document.querySelector('#total_people').addEventListener('keyup', () => {
    getValues();
})
document.querySelector('#custom_disc').addEventListener('keyup', () => {
    getValues();
})