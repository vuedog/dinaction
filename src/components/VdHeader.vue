<template>
  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    <header class="Header  f5" role="banner">
      <div class="d-flex px-3 flex-justify-between container-lg">

        <div class="d-flex flex-justify-between">
          <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
            <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
        </div>

        <div class="HeaderMenu d-flex flex-justify-between flex-auto">
          <div class="d-flex">
            <div class="">
              <div class="header-search   js-site-search" role="search">
                <!-- '"` --><!-- </textarea></xmp> -->
                <form accept-charset="UTF-8" action="/search" class="js-site-search-form" data-unscoped-search-url="/search" method="get">
                <div style="margin:0;padding:0;display:inline">
                  <input name="utf8" type="hidden" value="✓">
                </div>
                <label class="form-control header-search-wrapper js-chromeless-input-container">
                  <a href="/notifications" class="header-search-scope no-underline">/notifications</a>
                  <input type="text" class="form-control header-search-input js-site-search-focus " data-hotkey="s" name="q" value="" placeholder="Search GitHub" aria-label="Search GitHub" data-unscoped-placeholder="Search GitHub" data-scoped-placeholder="Search" autocapitalize="off">
                  <input type="hidden" class="js-site-search-type-field" name="type">
                </label>
                </form>
              </div>
            </div>

            <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
              <li>
                <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">Pull requests</a>
              </li>
              <li>
                <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">Issues</a>
              </li>
              <li>
                <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace">Marketplace</a>
              </li>
              <li>
                <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">Explore</a>
              </li>
            </ul>
          </div>

          <div class="d-flex">
            <ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
              <li class="dropdown js-menu-container js-header-notifications">
                <span class="d-inline-block  px-2">
                  <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-channel="notification-changed:1078011" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
                    <span class="mail-status "></span>
                    <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
                  </a>
                </span>
              </li>

              <li class="dropdown js-menu-container">
                <details class="dropdown-details js-dropdown-details d-flex px-2 flex-items-center">
                  <summary class="HeaderNavlink" aria-label="Create new…" data-ga-click="Header, create new, icon:add">
                    <svg aria-hidden="true" class="octicon octicon-plus float-left mr-1 mt-1" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
                    <span class="dropdown-caret mt-1"></span>
                  </summary>
                  <ul class="dropdown-menu dropdown-menu-sw">
                    <a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">New repository</a>
                    <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">Import repository</a>
                    <a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">New gist</a>
                    <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">New organization</a>
                  </ul>
                </details>
              </li>

              <li class="dropdown js-menu-container">
                <details class="dropdown-details js-dropdown-details d-flex pl-2 flex-items-center">
                  <summary class="HeaderNavlink name mt-1" aria-label="View profile and more" data-ga-click="Header, show menu, icon:avatar">
                    <img alt="@Runrioter" class="avatar float-left mr-1" src="https://avatars1.githubusercontent.com/u/1078011?v=4&amp;s=40" height="20" width="20">
                    <span class="dropdown-caret"></span>
                  </summary>

                  <ul class="dropdown-menu dropdown-menu-sw">
                    <li class="dropdown-header header-nav-current-user css-truncate">
                      Signed in as <strong class="css-truncate-target">Runrioter</strong>
                    </li>

                    <li class="dropdown-divider"></li>

                    <li><a class="dropdown-item" href="/Runrioter" data-ga-click="Header, go to profile, text:your profile">Your profile</a></li>
                    <li><a class="dropdown-item" href="/Runrioter?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a></li>
                    <li><a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your Gists</a></li>

                    <li class="dropdown-divider"></li>

                    <li><a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a></li>

                    <li><a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a></li>

                    <li><!-- '"` --><!-- </textarea></xmp> -->
                      <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post">
                        <div style="margin:0;padding:0;display:inline">
                          <input name="utf8" type="hidden" value="✓">
                          <input name="authenticity_token" type="hidden" value="bUDJhuY/iwcST+e9xjFi/e1nC6Gl+1016CSSbNLYyhGjE08r52553zTTl9l8nYz3EhK47KcgH0teOit7Bnf5IA==">
                        </div>
                        <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">Sign out</button>
                      </form>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="GwNlL1N8LOe8TnaFav++y+hPaMP5jhnNOf9cYMEBylLVUOOCUi3eP5rSBuHQU1DBFzrbjvtVW7OP4eV3Fa75Yw=="></div>
              <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">Sign out</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'vd-header'
}
</script>
