import TopBar from './TopBar'
import BottomNav from './BottomNav'

const AppShell = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <TopBar />
      <main className="flex-1 pb-24">
        <div className="max-w-xl mx-auto px-5 md:px-0">
          <div
            className="md:my-8 md:rounded-3xl md:p-6 md:shadow-lg"
            style={{
              backgroundColor: 'var(--color-bg-secondary)',
            }}
          >
            {children}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

export default AppShell
