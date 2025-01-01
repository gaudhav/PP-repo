describe('handling web table',()=>{
  
    it('handling web table', function () { 

        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('[id="t01"] tr td:nth-child(1)').each(($ele,index,$list)=>{
            if($ele.text()=="Michael"){
                cy.get('[id="t01"] tr td:nth-child(1)').eq(index).next().then((lastname)=>{
                    const last = lastname.text();
                    expect(last).to.equal('Doe');
                })
                cy.get('[id="t01"] tr td:nth-child(1)').eq(index).next().next().then((userage)=>{
                    const age = userage.text();
                    expect(age).to.equal('20');
                })
            }
        })


        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('[id="t01"] tr td:nth-child(1)').each(($ele, index, $list) => {
            const data = $ele.text();
            if (data.includes('Michael')) {
                cy.get('[id="t01"] tr td:nth-child(1)').eq(index).next().then((lastname) => {
                    const last = lastname.text();
                    expect(last).to.equal('Doe');
                })
                cy.get('[id="t01"] tr td:nth-child(1)').eq(index).next().next().then((userage) => {
                    const age = userage.text();
                    expect(age).to.equal('20');
                })    
            }
        })

     })

})
