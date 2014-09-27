describe('basicTest', function() {
	// http://jasmine.github.io/1.3/introduction.html 
	
	it('expect true to be true', function() {
		expect(true).toBe(true);
	});

	it('expect true not to be false', function() {
		expect(true).not.toBe(false);
	});

	it('expect false not to be undefined', function() {
		expect(false).not.toBe(undefined);
	});

	it('expect false to be falsy', function() {
		expect(false).toBeFalsy();
	});

	it('expect undefined to be falsy', function() {
		expect(undefined).toBeFalsy();
	});

});