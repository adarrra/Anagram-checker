describe("anagramCheck", function(){
    it("returns true for 'dev' is part from 'development'", function(){
        anagramCheck("development", "dev").should.equal(true);
    });
    it("returns true for 'tone' is part from 'development'", function(){
        anagramCheck("development", "tone").should.equal(true);
    });
    it("returns false for 'trone' is part from 'development'", function(){
        anagramCheck("development", "trone").should.equal(false);
    });
});