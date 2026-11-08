import { useState, useEffect } from 'react'
import { User, Mail, Building2, ShieldCheck, Settings, Eye, EyeOff } from 'lucide-react'

/**
 * Profile — admin profile page.
 *
 * Consumes: nothing.
 * Produces: a page with user info placeholder (avatar, name, email, role)
 * followed by a simple, non-functional settings form stub.
 *
 * @returns {import('react').JSX.Element}
 */
export default function Profile() {
  const [showPassword, setShowPassword] = useState(false)

  const handleSave = (event) => {
    event.preventDefault()
    // Stub: settings form is UI-only and not wired to any backend yet.
  }

  useEffect(() => {
    document.title = 'Profil'
  }, [])

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Profil</h2>
        <p className="mt-1 text-sm text-gray-500">
          Pengaturan akun dan profil toko.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
        {/* User info card */}
        <section className="lg:col-span-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <User className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Admin Toko</h3>
              <p className="mt-1 text-sm text-indigo-600 font-medium">
                admin@contoh.com
              </p>
              <span className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                <ShieldCheck className="w-3 h-3" />
                Administrator
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg border border-gray-200 bg-gray-50">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-900">admin@contoh.com</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg border border-gray-200 bg-gray-50">
                <Building2 className="w-4 h-4 text-gray-400" />
                <span className="text-gray-900">Toko Contoh</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg border border-gray-200 bg-gray-50">
                <ShieldCheck className="w-4 h-4 text-gray-400" />
                <span className="text-gray-900">Administrator</span>
              </div>
            </div>
          </div>
        </section>

        {/* Settings form stub */}
        <section className="lg:col-span-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-5">
              Pengaturan Akun
            </h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama lengkap
                </label>
                <input
                  type="text"
                  defaultValue="Admin Toko"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:bg-gray-100"
                  disabled
                />
                <p className="mt-1 text-xs text-gray-500">
                  Nama tampil di seluruh admin.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="admin@contoh.com"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Peran
                </label>
                <select
                  defaultValue="administrator"
                  disabled
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:bg-gray-100"
                >
                  <option value="administrator">Administrator</option>
                  <option value="manager">Manager</option>
                  <option value="staff">Staff</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Tidak dapat diubah dari halaman ini.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kata sandi
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    defaultValue="••••••••"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((show) => !show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                    aria-label="Tampilkan atau sembunyikan kata sandi"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">Minimal 8 karakter.</p>
              </div>

              <button
                type="submit"
                disabled
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Settings className="w-4 h-4" />
                Simpan perubahan
              </button>
              <p className="text-xs text-gray-500">
                Formulir ini adalah placeholder — fungsi penyimpanan akan
                dihubungkan pada tahap selanjutnya.
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
