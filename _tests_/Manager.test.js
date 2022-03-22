const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('init', () => {
      it('should require a name, id, and email', () => {
        const manager = new Manager('Alisaie', 9, 'A@email.com');
        expect('name' in manager).toBe(true);
        expect('id' in manager).toBe(true);
        expect('email' in manager).toBe(true);
      });
    });
    describe('getName', () => {
      it('should return the name', () => {
          const manager = new Manager('Alisaie', 9, 'A@email.com');

          expect(manager.getName()).toBe('Alisaie');
      });
    });
    describe('getId', () => {
        it('should return the ID', () => {
            const manager = new Manager('Alisaie', 9, 'A@email.com');

            expect(manager.getId()).toBe(9);
        });
      });
      describe('getEmail', () => {
        it('should return the email', () => {
            const manager = new Manager('Alisaie', 9, 'A@email.com');

            expect(manager.getEmail()).toBe('A@email.com');
        });
      });
      describe('getRole', () => {
        it('should return the role', () => {
            const manager = new Manager('Alisaie', 9, 'A@email.com');

            expect(manager.getRole()).toBe('Manager');
        });
      });
  });