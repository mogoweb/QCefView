﻿#ifndef QCEFVIEW_H
#define QCEFVIEW_H
#pragma once
#include <QCefView_global.h>

#include <QCefEvent.h>
#include <QCefQuery.h>
#include <QCefSetting.h>

#pragma region qt_headers
#include <QScopedPointer>
#include <QVariantList>
#include <QWidget>
#pragma endregion qt_headers

class QCefViewPrivate;

/// <summary>
/// Represents the CEF browser view
/// </summary>
class QCEFVIEW_EXPORT QCefView : public QWidget
{
  Q_OBJECT
  Q_DECLARE_PRIVATE(QCefView)
  Q_DISABLE_COPY(QCefView)
  QScopedPointer<QCefViewPrivate> d_ptr;

public:
  static const int64_t MainFrameID = 0;

public:
  /// <summary>
  ///
  /// </summary>
  enum WindowOpenDisposition
  {
    WOD_UNKNOWN,
    WOD_CURRENT_TAB,
    WOD_SINGLETON_TAB,
    WOD_NEW_FOREGROUND_TAB,
    WOD_NEW_BACKGROUND_TAB,
    WOD_NEW_POPUP,
    WOD_NEW_WINDOW,
    WOD_SAVE_TO_DISK,
    WOD_OFF_THE_RECORD,
    WOD_IGNORE_ACTION
  };
  Q_ENUM(WindowOpenDisposition)

public:
  /// <summary>
  /// Constructs a QCefView instance
  /// </summary>
  /// <param name="url">The target url</param>
  /// <param name="setting">The <see cref="QCefSetting"/> instance</param>
  /// <param name="parent">The parent</param>
  QCefView(const QString url, const QCefSetting* setting, QWidget* parent = 0);

  /// <summary>
  /// Constructs a QCefView instance
  /// </summary>
  /// <param name="parent">The parent</param>
  QCefView(QWidget* parent = 0);

  /// <summary>
  /// Destructs the QCefView instance
  /// </summary>
  ~QCefView();

  /// <summary>
  /// Gets the browser id
  /// </summary>
  /// <returns>The browser id</returns>
  int browserId();

  /// <summary>
  /// Navigates to the content.
  /// </summary>
  /// <param name="content">The content</param>
  void navigateToString(const QString& content);

  /// <summary>
  /// Navigates to the URL
  /// </summary>
  /// <param name="url">The url</param>
  void navigateToUrl(const QString& url);

  /// <summary>
  /// Checks whether the browser can go back
  /// </summary>
  /// <returns>True if can; otherwise false</returns>
  bool browserCanGoBack();

  /// <summary>
  /// Checks whether the browser can go forward
  /// </summary>
  /// <returns>True if can; otherwise false</returns>
  bool browserCanGoForward();

  /// <summary>
  /// Requires the browser to go back
  /// </summary>
  void browserGoBack();

  /// <summary>
  /// Requires the browser to go forward
  /// </summary>
  void browserGoForward();

  /// <summary>
  /// Checks whether the browser is loading
  /// </summary>
  /// <returns>True if it is loading; otherwise false</returns>
  bool browserIsLoading();

  /// <summary>
  /// Requires the browser to reload
  /// </summary>
  void browserReload();

  /// <summary>
  /// Requires the browser to stop load
  /// </summary>
  void browserStopLoad();

  /// <summary>
  /// Triggers the event for main frame
  /// </summary>
  /// <param name="event">The <see cref="QCefEvent"/> instance</param>
  /// <returns>True on successful; otherwise false</returns>
  bool triggerEvent(const QCefEvent& event);

  /// <summary>
  /// Triggers the event for specified frame
  /// </summary>
  /// <param name="event">The <see cref="QCefEvent"/> instance</param>
  /// <param name="frameId">The frame id</param>
  /// <returns>True on successful; otherwise false</returns>
  bool triggerEvent(const QCefEvent& event, int64_t frameId);

  /// <summary>
  /// Broad cast the event for all frames
  /// </summary>
  /// <param name="event">The <see cref="QCefEvent"/> instance</param>
  /// <returns>True on successful; otherwise false</returns>
  bool broadcastEvent(const QCefEvent& event);

  /// <summary>
  /// Response the <see cref="QCefQuery"/> request
  /// </summary>
  /// <param name="query">The query instance</param>
  /// <returns>True on successful; otherwise false</returns>
  bool responseQCefQuery(const QCefQuery& query);

  /// <summary>
  /// Executes javascript code in specified frame, this method does not report the result of the javascript.
  /// To get the result of the javascript execution use <see cref="executeJavascriptWithResult"/>
  /// </summary>
  /// <param name="frameId">The frame id</param>
  /// <param name="code">The javascript code</param>
  /// <param name="url">
  /// The URL where the script in question can be found, if any. The renderer may request this URL to show the developer
  /// the source of the error
  /// </param>
  /// <returns>True on successful; otherwise false</returns>
  bool executeJavascript(int64_t frameId, const QString& code, const QString& url);

  /// <summary>
  /// Executes javascript code in specified frame and the result will be reported through <see
  /// cref="reportJavascriptResult"/> signal
  /// </summary>
  /// <param name="frameId">The frame id</param>
  /// <param name="code">The javascript code</param>
  /// <param name="url">
  /// The URL where the script in question can be found, if any. The renderer may request this URL to show the developer
  /// the source of the error
  /// </param>
  /// <param name="context">The context used to identify the one execution</param>
  /// <returns>True on successful; otherwise false</returns>
  bool executeJavascriptWithResult(int64_t frameId, const QString& code, const QString& url, int64_t context);

  /// <summary>
  /// Sets the preference for this browser
  /// </summary>
  /// <param name="name">The preference name</param>
  /// <param name="value">
  /// The preference value, if this value is QVariant::UnknownType or QVariant::Invalid, the
  /// preference will be restored to default value
  /// </param>
  /// <param name="error">The error message populated on failure</param> <returns>True
  /// on successful; otherwise false</returns>
  bool setPreference(const QString& name, const QVariant& value, const QString& error);

signals:
  /// <summary>
  /// Gets called on loading state changed
  /// loadingStateChanged 以两次为单位调用，前一次IsLoading=1，后一次IsLoading=0。
  /// 多frame的网页，如cn.bing.com，会被多次成对调用。
  /// 无法利用loadingStateChanged、loadStart、loadEnd直接判断整个网页的加载完成，需要额外的方法。
  /// </summary>
  /// <param name="isLoading">Indicates the browser is loading</param>
  /// <param name="canGoBack">Indicates the browser can go back</param>
  /// <param name="canGoForward">Indicates the browser can go forward</param>
  void loadingStateChanged(bool isLoading, bool canGoBack, bool canGoForward, int browserId);

  /// <summary>
  /// Gets called on loading starts
  /// </summary>
  void loadStart(int browserId, int frameId, bool frameIsMain, int transition_type);

  /// <summary>
  /// Gets called on loading ends
  /// </summary>
  /// <param name="httpStatusCode"></param>
  void loadEnd(int httpStatusCode, int browserId, int frameId, bool frameIsMain);

  /// <summary>
  /// Gets called on loading failed due to error
  /// </summary>
  /// <param name="errorCode">The error code</param>
  /// <param name="errorMsg">The error message</param>
  /// <param name="failedUrl">The url caused the failure</param>
  /// <param name="handled">Sets this parameter to indicates whether this error was handled or not</param>
  void loadError(int errorCode, const QString& errorMsg, const QString& failedUrl, bool& handled, int browserId, int frameId, bool frameIsMain);

  /// <summary>
  /// Gets called on draggable region changed
  /// </summary>
  /// <param name="draggableRegion">The new draggable region</param>
  /// <param name="nonDraggableRegion">The new non-draggable region</param>
  void draggableRegionChanged(const QRegion& draggableRegion, const QRegion& nonDraggableRegion);

  /// <summary>
  /// Gets called on the address changed
  /// </summary>
  /// <param name="frameId">The frame id</param>
  /// <param name="url">The address</param>
  void addressChanged(qint64 frameId, const QString& url);

  /// <summary>
  /// Gets called on title changed
  /// </summary>
  /// <param name="title">The title</param>
  void titleChanged(const QString& title);

  /// <summary>
  /// Gets called on fullscreen mode changed
  /// </summary>
  /// <param name="fullscreen">The current fullscreen mode</param>
  void fullscreenModeChanged(bool fullscreen);

  /// <summary>
  /// Gets called on status message changed
  /// </summary>
  /// <param name="message">The status message</param>
  void statusMessage(const QString& message);

  /// <summary>
  /// Gets called on console message from the web content
  /// </summary>
  /// <param name="message">The message</param>
  /// <param name="level">The level</param>
  void consoleMessage(const QString& message, int level);

  /// <summary>
  /// Gets called on loading progress changed
  /// </summary>
  /// <param name="progress">Current progress</param>
  void loadingProgressChanged(double progress);

  /// <summary>
  /// Gets called on new <see cref="QCefQuery"/> request
  /// </summary>
  /// <param name="browserId">The browser id</param>
  /// <param name="frameId">The frame id</param>
  /// <param name="query">The query request</param>
  void cefQueryRequest(int browserId, qint64 frameId, const QCefQuery& query);

  /// <summary>
  /// Gets called on invoking method request from web content(Javascript)
  /// </summary>
  /// <param name="browserId">The browser id</param>
  /// <param name="frameId">The frame id</param>
  /// <param name="method">The method name</param>
  /// <param name="arguments">The arguments list</param>
  void invokeMethod(int browserId, qint64 frameId, const QString& method, const QVariantList& arguments);

  /// <summary>
  /// Gets called on the result of the javascript executed with <see cref="executeJavascriptWithResult"/> returned
  /// </summary>
  /// <param name="browserId">The browser id</param>
  /// <param name="frameId">The frame id</param>
  /// <param name="context">The context</param>
  /// <param name="result">The result</param>
  void reportJavascriptResult(int browserId, qint64 frameId, qint64 context, const QVariant& result);

public slots:
  /// <summary>
  /// Gets called before the popup browser created
  /// </summary>
  /// <param name="frameId">The source frame id</param>
  /// <param name="targetUrl">The target URL</param>
  /// <param name="targetFrameName">The target name</param>
  /// <param name="targetDisposition">Target window open method</param>
  /// <param name="settings">Settings to be used for the popup</param>
  /// <param name="DisableJavascriptAccess">Disable the access to Javascript</param>
  /// <returns>True to cancel the popup; false to allow</returns>
  virtual bool onBeforePopup(qint64 frameId,
                             const QString& targetUrl,
                             const QString& targetFrameName,
                             QCefView::WindowOpenDisposition targetDisposition,
                             QCefSetting& settings,
                             bool& DisableJavascriptAccess);

  /// <summary>
  /// Gets called right after the popup browser was created
  /// </summary>
  /// <param name="wnd">The host window of new created browser</param>
  virtual void onPopupCreated(QWindow* wnd);

public:
  /// <summary>
  /// Please refer to QWidget::inputMethodQuery
  /// </summary>
  QVariant inputMethodQuery(Qt::InputMethodQuery query) const override;

protected:
  /// <summary>
  /// Please refer to QWidget::paintEvent
  /// </summary>
  void paintEvent(QPaintEvent* event) override;

  /// <summary>
  /// Please refer to QWidget::inputMethodEvent
  /// </summary>
  void inputMethodEvent(QInputMethodEvent* event) override;

  /// <summary>
  /// Please refer to QWidget::showEvent
  /// </summary>
  void showEvent(QShowEvent* event) override;

  /// <summary>
  /// Please refer to QWidget::hideEvent
  /// </summary>
  void hideEvent(QHideEvent* event) override;

  /// <summary>
  /// Please refer to QWidget::focusInEvent
  /// </summary>
  void focusInEvent(QFocusEvent* event) override;

  /// <summary>
  /// Please refer to QWidget::focusOutEvent
  /// </summary>
  void focusOutEvent(QFocusEvent* event) override;

  /// <summary>
  /// Please refer to QWidget::resizeEvent
  /// </summary>
  void resizeEvent(QResizeEvent* event) override;

  /// <summary>
  /// Please refer to QWidget::keyPressEvent
  /// </summary>
  void keyPressEvent(QKeyEvent* event) override;

  /// <summary>
  /// Please refer to QWidget::keyReleaseEvent
  /// </summary>
  void keyReleaseEvent(QKeyEvent* event) override;

  /// <summary>
  /// Please refer to QWidget::mouseMoveEvent
  /// </summary>
  void mouseMoveEvent(QMouseEvent* event) override;

  /// <summary>
  /// Please refer to QWidget::mousePressEvent
  /// </summary>
  void mousePressEvent(QMouseEvent* event) override;

  /// <summary>
  /// Please refer to QWidget::mouseReleaseEvent
  /// </summary>
  void mouseReleaseEvent(QMouseEvent* event) override;

  /// <summary>
  /// Please refer to QWidget::wheelEvent
  /// </summary>
  void wheelEvent(QWheelEvent* event) override;
};

#endif // QCEFVIEW_H
