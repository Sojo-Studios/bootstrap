/**
 * @fileoverview Bootstrap for the Sojo JavaScript Library
 *
 */

/* global Modernizr, console */



/**
 * Top level object that encapsulates all custom javascript stuff we like to
 * do in a web app.
 * @constructor
 */
function Sojo()
{

}


/**
 * Initialize the Sojo object for this window. Should be called like a static
 * function. Will fail if it's already been called.
 * @return {boolean} true if successful
 */
Sojo.prototype.InitializeSojo = function()
{
  // Don't allow this to happen twice

  if (window.sojo !== undefined)
  {
    return false;
  }

  window.sojo = new Sojo();
  return window.sojo.init();
};


/**
 * The name for the webkit console timer
 * @const
 * @type {string}
 */
Sojo.prototype.initializationTimerName = 'Initialization';


/**
 * Instance initialization for the global sojo object
 * @return {boolean} true if successful
 */
Sojo.prototype.init = function()
{
  // Time page initialization
  console.time(this.initializationTimerName);

  // Test modernizr features
  if (!this.featureTest())
  {
    return false;
  }

  // Append SVG data, if something needs it
  $('div.sojo-logo').append(window['sojo-logo']);
  $('div.sojo-oh').append(window['sojo-oh']);

  console.timeEnd(this.initializationTimerName);
  return true;
};


/**
 * We need all Modernizr features to be present to load the page
 *
 * @return {boolean} true if successful
 */
Sojo.prototype.featureTest = function()
{
  // Check to make sure we didn't fail a modernizr feature test
  var keys = Object.keys(Modernizr);
  var len = keys.length;
  var success = true;
  for (var i = 0; i < len; i++)
  {
    if (Modernizr[keys[i]] === false)
    {
      console.error('Browser does not support feature: ' + keys[i]);
      success = false;
    }
  }

  return success;
};


