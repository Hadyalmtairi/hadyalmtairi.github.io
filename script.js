function acceptTerms() {
    document.getElementById('terms-popup').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
}
function declineTerms() {
    alert("يجب الموافقة على الشروط للمتابعة.");
}
function autoFill() {
    document.querySelector('[name=name]').value = "خالد المطيري";
    document.querySelector('[name=gender]').value = "ذكر";
    document.querySelector('[name=age]').value = 26;
    document.querySelector('[name=voice]').value = "مماثل لصوتي الحقيقي";
    document.querySelector('[name=appearance]').value = "مطابق لي تمامًا";
    document.querySelector('[name=notes]').value = "يرجى جعله نسخة مني بنسبة 100٪.";
}
document.getElementById('robotForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('confirmation').classList.remove('hidden');
});
