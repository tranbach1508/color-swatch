import React from 'react';
import ReactDOM from 'react-dom';
import { useCallback, useRef, useState, useEffect } from 'react';
import { Icon, ActionList, AppProvider, Card, ContextualSaveBar, FormLayout, Frame, Layout, Loading, Modal, Navigation, Page, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, TextField, Toast, TopBar } from '@shopify/polaris';
import { ArrowLeftMinor, ConversationMinor, HomeMajorMonotone, InstallMinor, ColorsMajorMonotone, SettingsMajorMonotone } from '@shopify/polaris-icons';
import Routers from './Routers';
import {
  Link
} from "react-router-dom";


export default function App() {

  const [adminName, setAdminName] = useState("");
  const [options, setOption] = useState([]);

  const defaultState = useRef({
    emailFieldValue: 'dharma@jadedpixel.com',
    nameFieldValue: 'Jaded Pixel',
  });
  const skipToContentRef = useRef(null);

  const [toastActive, setToastActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [nameFieldValue, setNameFieldValue] = useState(
    defaultState.current.nameFieldValue,
  );
  const [emailFieldValue, setEmailFieldValue] = useState(
    defaultState.current.emailFieldValue,
  );
  const [storeName, setStoreName] = useState(
    defaultState.current.nameFieldValue,
  );
  const [supportSubject, setSupportSubject] = useState('');
  const [supportMessage, setSupportMessage] = useState('');

  const handleSubjectChange = useCallback(
    (value) => setSupportSubject(value),
    [],
  );
  const handleMessageChange = useCallback(
    (value) => setSupportMessage(value),
    [],
  );
  const handleDiscard = useCallback(() => {
    setEmailFieldValue(defaultState.current.emailFieldValue);
    setNameFieldValue(defaultState.current.nameFieldValue);
    setIsDirty(false);
  }, []);
  const handleSave = useCallback(() => {
    defaultState.current.nameFieldValue = nameFieldValue;
    defaultState.current.emailFieldValue = emailFieldValue;

    setIsDirty(false);
    setToastActive(true);
    setStoreName(defaultState.current.nameFieldValue);
  }, [emailFieldValue, nameFieldValue]);
  const handleNameFieldChange = useCallback((value) => {
    setNameFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleEmailFieldChange = useCallback((value) => {
    setEmailFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue('');
  }, []);
  const handleSearchFieldChange = useCallback((value) => {
    setSearchValue(value);
    setSearchActive(value.length > 0);
  }, []);
  const toggleToastActive = useCallback(
    () => setToastActive((toastActive) => !toastActive),
    [],
  );
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    [],
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive,
      ),
    [],
  );
  const toggleIsLoading = useCallback(
    () => setIsLoading((isLoading) => !isLoading),
    [],
  );
  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    [],
  );

  const toastMarkup = toastActive ? (
    <Toast onDismiss={toggleToastActive} content="Changes saved" />
  ) : null;

  const userMenuActions = [
    {
      items: [{ content: 'Community forums' }],
    },
  ];

  const contextualSaveBarMarkup = isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: handleSave,
      }}
      discardAction={{
        onAction: handleDiscard,
      }}
    />
  ) : null;

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Dharma"
      detail={storeName}
      initials="D"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const searchResultsMarkup = (
    <Card>
      <ActionList
        items={[
          { content: 'Shopify help center' },
          { content: 'Community forums' },
        ]}
      />
    </Card>
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      value={searchValue}
      placeholder="Search"
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const navigationMarkup = (
    <nav className="Polaris-Navigation">
      <div className="Polaris-Navigation__PrimaryNavigation Polaris-Scrollable Polaris-Scrollable--vertical" data-polaris-scrollable="true">
        <ul className="Polaris-Navigation__Section">
          <li className="Polaris-Navigation__ListItem"><button type="button" className="Polaris-Navigation__Item">
            <div className="Polaris-Navigation__Icon"><span className="Polaris-Icon"><svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
              <path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2" fillRule="evenodd" />
            </svg></span></div><span className="Polaris-Navigation__Text">Back to Shopify</span>
          </button></li>
        </ul>
        <ul className="Polaris-Navigation__Section Polaris-Navigation__Section--withSeparator">
          <li className="Polaris-Navigation__SectionHeading"><span className="Polaris-Navigation__Text">Navigation</span></li>
          <li className="Polaris-Navigation__ListItem">
            <div className="Polaris-Navigation__ItemWrapper"><Link className="Polaris-Navigation__Item" tabIndex={0} to={'/'} data-polaris-unstyled="true">
              <div className="Polaris-Navigation__Icon"><span className="Polaris-Icon"><svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                <path d="M19.664 8.252l-9-8a1 1 0 0 0-1.328 0L8 1.44V1a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5.773L.336 8.252a1.001 1.001 0 0 0 1.328 1.496L2 9.449V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.449l.336.299a.997.997 0 0 0 1.411-.083 1.001 1.001 0 0 0-.083-1.413zM16 18h-2v-5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5H4V7.671l6-5.333 6 5.333V18zm-8 0v-4h4v4H8zM4 2h2v1.218L4 4.996V2z" fillRule="evenodd" />
              </svg></span></div><span className="Polaris-Navigation__Text">Dashboard</span>
            </Link></div>
          </li>
          <li className="Polaris-Navigation__ListItem">
            <div className="Polaris-Navigation__ItemWrapper"><Link className="Polaris-Navigation__Item" tabIndex={0} to={'integrate'} data-polaris-unstyled="true">
              <div className="Polaris-Navigation__Icon">
                <span className="Polaris-Icon">
                  <svg className="Polaris-Icon__Svg" viewBox="0 0 20 20"><path d="M9 18H4V7h3c.55 0 1-.45 1-1V5h6v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1H8V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1h1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zM2 5V2h4v3H2zm17.707 8.293l-5-5A.997.997 0 0 0 14 8H9a1 1 0 0 0-1 1v5c0 .265.105.52.293.707l5 5a.997.997 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414zM14 17.586l-4-4V10h3.586l4 4L14 17.586zM12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg>
                </span>
              </div><span className="Polaris-Navigation__Text">Theme integrate</span>
            </Link></div>
          </li>
          <li className="Polaris-Navigation__ListItem">
            <div className="Polaris-Navigation__ItemWrapper"><Link className="Polaris-Navigation__Item" tabIndex={0} to={'custom'} data-polaris-unstyled="true">
              <div className="Polaris-Navigation__Icon">
                <Icon
                  source={ColorsMajorMonotone} />
              </div><span className="Polaris-Navigation__Text">Custom watch</span>
            </Link></div>
          </li>
          <li className="Polaris-Navigation__ListItem">
            <div className="Polaris-Navigation__ItemWrapper"><Link className="Polaris-Navigation__Item" tabIndex={0} to={'settings'} data-polaris-unstyled="true">
              <div className="Polaris-Navigation__Icon">
                <Icon
                  source={SettingsMajorMonotone} />
              </div><span className="Polaris-Navigation__Text">Settings</span>
            </Link></div>
          </li>
        </ul>
        <ul className="Polaris-Navigation__Section Polaris-Navigation__Section--withSeparator">
          <li className="Polaris-Navigation__SectionHeading"><span className="Polaris-Navigation__Text">Help</span></li>
          <li className="Polaris-Navigation__ListItem">
            <a href="https://globosoftware.net/kbtopic/smart-product-filter/" target="_blank" type="button" className="Polaris-Navigation__Item">
              <div className="Polaris-Navigation__Icon">
                <span className="Polaris-Icon">
                  <svg className="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true">
                    <circle cx={10} cy={10} r={9} fill="currentColor" />
                    <path d="M10 0c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-4c-.553 0-1 .447-1 1 0 .553.447 1 1 1 .553 0 1-.447 1-1 0-.553-.447-1-1-1m0-10c-1.654 0-3 1.346-3 3 0 .552.447 1 1 1 .553 0 1-.448 1-1 0-.551.448-1 1-1s1 .449 1 1c0 .322-.149.617-.409.808-1.011.74-1.591 1.808-1.591 2.929v.263c0 .553.447 1 1 1 .553 0 1-.447 1-1v-.263c0-.653.484-1.105.773-1.317.768-.564 1.227-1.468 1.227-2.42 0-1.654-1.346-3-3-3" />
                  </svg>
                </span>
              </div>
              <span className="Polaris-Navigation__Text">Documentation</span>
            </a>
          </li>
          <li className="Polaris-Navigation__ListItem">
            <a href="https://filter-v5.globosoftware.net/contact" type="button" className="Polaris-Navigation__Item">
              <div className="Polaris-Navigation__Icon">
                <span className="Polaris-Icon">
                  <svg className="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true">
                    <path fill="currentColor" d="M10 15c-2.54 0-4.69 1.092-6 1.96C5.632 18.232 7.72 19 10 19s4.365-.767 6-2.04c-1.313-.87-3.463-1.96-6-1.96z" />
                    <path d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.487 10-10c0-5.514-4.486-10-10-10zm5.603 15.7C14.2 14.84 12.257 14 10 14c-2.256 0-4.2.842-5.604 1.7C2.92 14.248 2 12.23 2 10c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.23-.92 4.248-2.397 5.7zM6.15 17.01C7.217 16.456 8.536 16 10 16s2.782.457 3.85 1.008c-1.143.63-2.455.992-3.85.992s-2.708-.362-3.85-.99zM10 10c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-6C7.794 4 6 5.794 6 8s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z" />
                  </svg>
                </span>
              </div>
              <span className="Polaris-Navigation__Text">Contact us</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  const loadingMarkup = isLoading ? <Loading /> : null;

  const skipToContentTarget = (
    <a id="SkipToContentTarget" ref={skipToContentRef} tabIndex={-1} />
  );

  const actualPageMarkup = (
    <Page title="Account">
      <Layout>
        {skipToContentTarget}
        <Layout.AnnotatedSection
          title="Account details"
          description="Jaded Pixel will use this as your account information."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                label="Full name"
                value={nameFieldValue}
                onChange={handleNameFieldChange}
              />
              <TextField
                type="email"
                label="Email"
                value={emailFieldValue}
                onChange={handleEmailFieldChange}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );

  const loadingPageMarkup = (
    <SkeletonPage>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={9} />
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );

  const pageMarkup = isLoading ? loadingPageMarkup : actualPageMarkup;

  const modalMarkup = (
    <Modal
      open={modalActive}
      onClose={toggleModalActive}
      title="Contact support"
      primaryAction={{
        content: 'Send',
        onAction: toggleModalActive,
      }}
    >
      <Modal.Section>
        <FormLayout>
          <TextField
            label="Subject"
            value={supportSubject}
            onChange={handleSubjectChange}
          />
          <TextField
            label="Message"
            value={supportMessage}
            onChange={handleMessageChange}
            multiline
          />
        </FormLayout>
      </Modal.Section>
    </Modal>
  );

  const theme = {
    colors: {
      topBar: {
        background: '#357997',
      },
    },
    logo: {
      width: 124,
      topBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
      contextualSaveBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
      url: 'http://jadedpixel.com',
      accessibilityLabel: 'Jaded Pixel',
    },
  };

  return (
    <div style={{ height: '500px' }}>
      <AppProvider
        theme={theme}
        i18n={{
          Polaris: {
            Avatar: {
              label: 'Avatar',
              labelWithInitials: 'Avatar with initials {initials}',
            },
            ContextualSaveBar: {
              save: 'Save',
              discard: 'Discard',
            },
            TextField: {
              characterCount: '{count} characters',
            },
            TopBar: {
              toggleMenuLabel: 'Toggle menu',

              SearchField: {
                clearButtonLabel: 'Clear',
                search: 'Search',
              },
            },
            Modal: {
              iFrameTitle: 'body markup',
            },
            Frame: {
              skipToContent: 'Skip to content',
              Navigation: {
                closeMobileNavigationLabel: 'Close navigation',
              },
            },
          },
        }}
      >
        <Frame
          topBar={topBarMarkup}
          navigation={navigationMarkup}
          showMobileNavigation={mobileNavigationActive}
          onNavigationDismiss={toggleMobileNavigationActive}
          skipToContentTarget={skipToContentRef.current}
        >
          {contextualSaveBarMarkup}
          <Routers></Routers>
          {toastMarkup}
          {modalMarkup}
        </Frame>
      </AppProvider>
    </div>
  );
}
