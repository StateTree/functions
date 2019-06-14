import {expect} from 'chai';
import Functions from './../src/lib/functions'

let functions, func1, func2, func3, func4, connector;
let executionCount = 0;
let connectorExecuted = 0;
describe ('API', ()=>{
	beforeEach(()=>{
		func1 = function(){executionCount++};
		func2 = function(){executionCount++};
		func3 = function(){executionCount++};
		func4 = function(){executionCount++};
		connector = function(){ connectorExecuted = 1;};
		functions = new Functions(connector);
	});

	afterEach(()=>{
		functions = null;
		executionCount = 0;
		connectorExecuted = 0;
	});

	describe('addFunction', ()=>{
		it('Should add function to entries array by default', ()=>{
			functions.addFunction(func1);
			expect(functions._entries.length).equal(1);
			expect(functions._tickerEntries.length).equal(0);
			functions.addFunction(func2);
			expect(functions._entries.length).equal(2);
			expect(functions._tickerEntries.length).equal(0);
		});
		it('Should add function to tickerEntries array if executeInCycle is set to true', ()=>{
			functions.addFunction(func3, null, true);
			expect(functions._tickerEntries.length).equal(1);
			expect(functions._entries.length).equal(0);
			functions.addFunction(func4,  null, true);
			expect(functions._tickerEntries.length).equal(2);
			expect(functions._entries.length).equal(0);
		});
		it('should not execute the function', ()=>{
			functions.addFunction(func1);
			expect(executionCount).equal(0);
		});
		it('if function execution in progress, should add after completion', (done)=>{
			functions.addFunction(func1, null, true);
			functions.addFunction(func2, null, true);
			functions.trigger();
			functions.addFunction(func3);
			functions.addFunction(func4, null, true);
			expect(functions.remainingEntries).equal(2);
			expect(functions._tickerEntries.length).equal(2);
			expect(functions._entries.length).equal(0);
			setTimeout(()=>{
				expect(functions.remainingEntries).equal(0);
				expect(functions._tickerEntries.length).equal(3);
				expect(functions._entries.length).equal(1);
				done();
			},0);
		});
		it('callback should be called after adding', (done)=>{
			expect(functions._entries.length).equal(0);
			functions.addFunction(func1, null, false, 0 , ()=>{
				expect(functions._entries.length).equal(1);
			});

			expect(functions._tickerEntries.length).equal(0);
			functions.addFunction(func2, null, true, 0 , ()=>{
				expect(functions._tickerEntries.length).equal(1);
				done();
			});

		});
	})
	describe('removeFunction', ()=>{
		it('Should remove function to entries array by default', ()=>{
			functions.addFunction(func1);
			expect(functions._entries.length).equal(1);
			functions.addFunction(func2);
			expect(functions._entries.length).equal(2);
			functions.removeFunction(func1);
			expect(functions._entries.length).equal(1);
		});
		it('Should add function to tickerEntries array if executeLaterInNextTick is set to true', ()=>{
			functions.addFunction(func3, null, true);
			expect(functions._tickerEntries.length).equal(1);
			functions.addFunction(func4,  null, true);
			expect(functions._tickerEntries.length).equal(2);
			functions.removeFunction(func3);
			expect(functions._tickerEntries.length).equal(1);
		});
		it('if function execution in progress, should remove after completion', (done)=>{
			functions.addFunction(func1, null, true);
			functions.addFunction(func2, null, true);
			functions.trigger();
			functions.removeFunction(func1);
			expect(functions.remainingEntries).equal(2);
			expect(functions._tickerEntries.length).equal(2);
			setTimeout(()=>{
				expect(functions.remainingEntries).equal(0);
				expect(functions._tickerEntries.length).equal(1);
				done();
			},0);
		});
		it('callback should be called after removing', (done)=>{
			functions.addFunction(func1);
			functions.addFunction(func2,null, true);
			expect(functions._entries.length).equal(1);
			expect(functions._tickerEntries.length).equal(1);
			functions.removeFunction(func1, null, ()=>{
				expect(functions._entries.length).equal(0);
			})
			functions.removeFunction(func2, null, ()=>{
				expect(functions._tickerEntries.length).equal(0);
				done()
			})

		});
	})
	describe('trigger', ()=>{
		it('Should execute all added functions ', ()=>{
			functions.addFunction(func1);
			functions.addFunction(func2);
			functions.trigger();
			expect(executionCount).equal(2);
			executionCount = 0;
			functions.removeFunction(func2);
			functions.trigger();
			expect(executionCount).equal(1);
		});
		it('Should execute callback after all functions are executed', (done)=>{
			functions.addFunction(func1, null, true);
			functions.addFunction(func2);
			functions.trigger(()=>{
				expect(executionCount).equal(2);
				done();
			});
			expect(executionCount).equal(1);
		});
		it('Should execute connector after callback ', (done)=>{
			functions.addFunction(func1, null, true);
			functions.addFunction(func2);
			functions.trigger(()=>{
				expect(connectorExecuted).equal(0);
				expect(executionCount).equal(2);
				setTimeout(()=>{
					expect(connectorExecuted).equal(1);
					done();
				},0);
			});
			expect(executionCount).equal(1);
		});

	});
	describe('setConnector', ()=>{
		it('Should add new connector ', ()=>{
			functions.removeConnector(connector);
			expect(functions.connector).equal(null);
			functions.setConnector(connector);
			expect(functions.connector).equal(connector);
		});
		it('if we set connector in the middle of execution, connector should wait till the current trigger get completed', (done)=>{
			functions.removeConnector(connector);
			expect(functions.connector).equal(null);
			functions.addFunction(func1, null, true);
			functions.addFunction(func2, null, true);
			functions.trigger(()=>{
				expect(executionCount).equal(2);
				expect(functions.connector).equal(null);
			});
			functions.setConnector(connector);
			expect(functions.connector).equal(null);
			functions.trigger(()=>{
				expect(connectorExecuted).equal(0);
				expect(functions.connector).equal(connector);
				expect(executionCount).equal(4);
				setTimeout(()=>{
					expect(connectorExecuted).equal(1);
					done();
				},0);
			});
		});
	});
	describe('removeConnector', ()=>{
		it('Should remove the connector ', ()=>{
			functions.removeConnector(connector);
			expect(functions.connector).equal(null);
		});
		it('if we set connector in the middle of execution, connector should wait till the current trigger get completed', (done)=>{
			functions.addFunction(func1, null, true);
			functions.addFunction(func2, null, true);
			functions.trigger(()=>{
				expect(connectorExecuted).equal(0);
				expect(executionCount).equal(2);
				setTimeout(()=>{
					expect(connectorExecuted).equal(1);
					connectorExecuted = 0;
				},0);
			});
			functions.removeConnector(connector);
			expect(functions.connector).equal(connector);
			functions.trigger(()=>{
				expect(functions.connector).equal(null);
				expect(connectorExecuted).equal(0);
				expect(executionCount).equal(4);
				setTimeout(()=>{
					expect(connectorExecuted).equal(0);
					done();
				},0);
			});
		});
	});
	describe('linkConnector', ()=>{
		it('Should execute connector after all functions are executed ', (done)=>{
			functions.linkConnector(connector);
			functions.addFunction(func1);
			functions.addFunction(func2);
			functions.trigger(()=>{
				expect(connectorExecuted).equal(0);
				expect(executionCount).equal(2);
				setTimeout(()=>{
					expect(connectorExecuted).equal(1);
					done();
				},0);
			});
		});
		it('if we add connector in the middle of execution, connector should not execute for the current trigger and execute for next trigger', (done)=>{
			functions.unLinkConnector(connector);
			functions.addFunction(func1, null, true);
			functions.addFunction(func2, null, true);
			functions.trigger(()=>{
				expect(connectorExecuted).equal(0);
				expect(executionCount).equal(2);
				setTimeout(()=>{
					expect(connectorExecuted).equal(0);
				},0);
			});
			functions.linkConnector(connector);
			functions.trigger(()=>{
				expect(connectorExecuted).equal(0);
				expect(executionCount).equal(4);
				setTimeout(()=>{
					expect(connectorExecuted).equal(1);
					done();
				},0);
			});
		});
	})
	describe('unLinkConnector', ()=>{
		it('Should not execute connector if removed ', (done)=>{
			functions.unLinkConnector(connector);
			functions.addFunction(func1);
			functions.addFunction(func2);
			functions.trigger(()=>{
				expect(connectorExecuted).equal(0);
				expect(executionCount).equal(2);
				setTimeout(()=>{
					expect(connectorExecuted).equal(0);
					done();
				},0);
			});
		});
		it('if we unlink connector in the middle of execution, connector should still execute for the current trigger and not for next trigger', (done)=>{
			functions.addFunction(func1, null, true);
			functions.addFunction(func2, null, true);
			functions.trigger(()=>{
				expect(connectorExecuted).equal(0);
				expect(executionCount).equal(2);
				setTimeout(()=>{
					expect(connectorExecuted).equal(1);
					connectorExecuted = 0;
				},0);
			});
			functions.unLinkConnector(connector);
			functions.trigger(()=>{
				expect(connectorExecuted).equal(0);
				expect(executionCount).equal(4);
				setTimeout(()=>{
					expect(connectorExecuted).equal(0);
					done();
				},0);
			});
		});
	})
});