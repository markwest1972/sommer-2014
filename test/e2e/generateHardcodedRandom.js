describe('happy flow of application:', function() {
  
    var kjonn = ["kvinne", "mann"];
    var sivilstatus = ["gift/samboer", "skilt", "singel", "complicated"];
    var alder = ["youngster","coolcat", "hipster", "gammelringrev"];
    var hodet = ["caps","turban","hette","hjelm","solbriller","hijab"];
    var studiested = ["ntnu","selvlaertrover","annet"];
    var programmeringsstil = ["batenblirtil","detordnerseg","ordenungmusssein"];
    var musikk = ["indie","trash","disco","tronderrock","metal","rave","klassisk"];
    var personlighet = ["introvert", "ekstrovert", "ekstrovertpluss"];
    var hypepreferanse = ["bigdata", "internetofthings","laerkidsakoding"];
    var planerforkvelden = ["endresivilstatus","smiskemedsjefen","mingle","kode","nytelivet"];
    var favorittgode = ["fribar","gadgetkonto","kurskonferanse","frikantine","pensjon"];
    var premiehvisduvinner = ["moto360", "oculusrift"];
  

  it('should click through application with random entries and register participant', function() {
    
    //partial-index
    browser.get('/');
   

    
    browser.findElement(by.name("registerAnswer")).click();
    browser.findElement(by.name("startButton")).click();
    


    function getRandom(list) {
        return list[Math.floor((Math.random() * list.length))];
    }

    //fill out answers


    browser.findElement(by.name(getRandom(kjonn))).click();
    browser.findElement(by.name(getRandom(sivilstatus))).click();
    browser.findElement(by.name(getRandom(alder))).click();
    browser.findElement(by.name(getRandom(hodet))).click();
    browser.findElement(by.name(getRandom(studiested))).click();
    browser.findElement(by.name(getRandom(programmeringsstil))).click();
    browser.findElement(by.name(getRandom(musikk))).click();
    browser.findElement(by.name(getRandom(personlighet))).click();
    browser.findElement(by.name(getRandom(hypepreferanse))).click();
    browser.findElement(by.name(getRandom(planerforkvelden))).click();
    browser.findElement(by.name(getRandom(favorittgode))).click();
    browser.findElement(by.name(getRandom(premiehvisduvinner))).click();
    

    browser.findElement(by.name("registerButton")).click();



    //partial-register-participant
    var milliseconds = (new Date).getTime();
    browser.findElement(By.name("participantName")).sendKeys("test");
    browser.findElement(By.name("participantEmail")).sendKeys("test" + milliseconds +"@happyflow.no");
    browser.findElement(By.name("submitButton")).click();
    
    });
});