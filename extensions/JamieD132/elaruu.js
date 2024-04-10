//Name: Elaruu facts and stats
//ID: elaruu
//Description: In commemoration of the greatest Scratcher that ever lived; @elaruu.
//By: JamieD132 <https://scratch.mit.edu/users/JamieD132/>
//License: MPL-2.0


/*--
Unfortunately both JamieD132's and elaruu's accounts are now deleted...
--*/





((Scratch) => {
    "use strict";
  

const elaruuicon="data:image/png;base64,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"
const elaruublock="data:image/png;base64,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"
const date1 = new Date('10/31/2022');
const month = new Date().getMonth();
const date = new Date().getDate();
const year = new Date().getFullYear();
const date2 = new Date(String(month)+'/'+String(date)+'/'+String(year));
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

class elaruu {
    getInfo() {
      return {
        id: 'elaruu',
        name: 'Elaruu',
        menuIconURI: elaruuicon,
        blockIconURI: elaruublock,
        color1:'90abe2',
        docsURI: 'https://sratchpeople.fandom.com/wiki/Elaruu',
        blocks: [
          {
            opcode: 'follow',
            blockType: Scratch.BlockType.REPORTER,
            text: 'how to follow @elaruu?',
          },
          {
            opcode: 'best',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Who is the best scratcher?',
          },'---',
          {
            opcode: 'record',
            blockType: Scratch.BlockType.REPORTER,
            text: 'elaruu\'s [INPUT] record',
            arguments: {
                INPUT: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'elaruu'
                }
            }
          },'---',
          {
            opcode: 'open',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Open @elaruu\'s [INPUT] page',
            arguments:{
                INPUT: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'page'
                }
            }
          },
          {
            opcode: 'search',
            blockType: Scratch.BlockType.COMMAND,
            text: 'search for [INPUT] about @elaruu',
            arguments: {
                INPUT: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'search'
                }
            }
          },
          {
            opcode: 'me',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'I am @elaruu?',
          },'---','---',
          {
            opcode: 'fun fact',
            blockType: Scratch.BlockType.LABEL,
            text: 'Fun Fact! It has been '+diffDays+' days since',
            arguments: {
                INPUT: {
                    type: Scratch.ArgumentType.NOTE,
                    defaultValue: "66"
                }
            }
          },
          {
            opcode: 'fun fact.',
            blockType: Scratch.BlockType.LABEL,
            text: '@elaruu joined Scratch!',
            arguments: {
                INPUT: {
                    type: Scratch.ArgumentType.NOTE,
                    defaultValue: "66"
                }
            }
          },
          {
            opcode: 'fun fact2',
            blockType: Scratch.BlockType.LABEL,
            text: 'Fun Fact! @elaruu\'s first follower was ',
            arguments: {
                INPUT: {
                    type: Scratch.ArgumentType.NOTE,
                    defaultValue: "66"
                }
            }
          },
          {
            opcode: 'fun fact2.',
            blockType: Scratch.BlockType.LABEL,
            text: '@mitchelldzamko!',
            arguments: {
                INPUT: {
                    type: Scratch.ArgumentType.NOTE,
                    defaultValue: "66"
                }
            }
          },
          
        ],
        menus: {
            elaruu: {
              acceptReporters: true,
              items: [
                'follower',
                'mail',
                'related projects',
                'related studios',

              ],
            },
            page: {
                acceptReporters: true,
                items: [
                  'profile',
                  'followers',
                  'api',
                  'message count',
                ],
              },
              search: {
                acceptReporters: true,
                items:[
                    'projects',
                    'studios'
                ]
              }
          },
      };
    }
  
    follow() {
      return "go to https://scratch.mit.edu/users/elaruu/, and then press \"follow\"";
    }
    best() {
        return "@elaruu";
      }
      record(args) {
        if (args.INPUT === 'follower'){return '~670'}
        if (args.INPUT === 'mail'){return '~21,000'}
        if (args.INPUT === 'related projects'){return '~200'}
        if (args.INPUT === 'related studios'){return '~70'}
        if (args.INPUT === 'cheese consuming'){return 'Don\'t eat cheese, you monster! >:('}
      }
      open(args) {
        if (args.INPUT === 'profile'){window.open('https://scratch.mit.edu/users/elaruu');}
        if (args.INPUT === 'followers'){window.open('https://scratch.mit.edu/users/elaruu/followers');}
        if (args.INPUT === 'api'){window.open('https://api.scratch.mit.edu/users/elaruu');}
        if (args.INPUT === 'message count'){window.open('https://api.scratch.mit.edu/users/elaruu/messages/count');}
      }
      search(args) {
        if (args.INPUT === 'projects'){window.open('https://scratch.mit.edu/search/projects?q=elaruu');}
        if (args.INPUT === 'studios'){window.open('https://scratch.mit.edu/search/studios?q=elaruu');}
      }
      me() {
        return false;
      }
      
  }
  Scratch.extensions.register(new elaruu());
})(Scratch);
  
