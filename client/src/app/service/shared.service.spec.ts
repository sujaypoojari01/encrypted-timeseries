import { TestBed } from '@angular/core/testing'
import { SharedService } from './shared.service' 

describe('TicketService', () => {
    let service: SharedService
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SharedService);
      });
  
  it('validateHash function should return true', () => {
    let emitedData = 'U2FsdGVkX1+sk8WMVNpkPYkM5vMxmMuOq+pVQk8w0jjcyO6vXRUBjxNdxY76C8hrefBh5PkV6av59btVI+2e9aMhTBrLnk4ASVVaCEX2wMZNGTACreOR8QkuUv+Mrjc9BJFfQUoLVoq2AtvnQ7oAihj1M0jWpWSabcNFx3ARQsT93zEv9zs9ysj+RYW9nYkkBc9l3SpS79/CPBOd82EnFrnMdXqRZpu2cZvoHk1BsHA='
    let responseMock = {"names":"Asa Jast","origin":"Guybury","destination":"Heathcoteberg","secret_key":"1e68f769e2ce44ea62bd2b8dec3fb4af141ee5332ac26c566e3a38dc977c9d3a"}
    const decryptResponse = service.decrypt(emitedData)
    expect(decryptResponse).toEqual(responseMock)
  })
  })
  