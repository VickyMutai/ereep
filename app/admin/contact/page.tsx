import { requireChatGPTUser, chatGPTSignOutPath } from '../../chatgpt-auth';
import { getContactContent, listContactMessages } from '../../../db/contact';

export const dynamic = 'force-dynamic';
type AdminContactProps = { searchParams?: Promise<{ saved?: string }> };

export default async function AdminContactPage({ searchParams }: AdminContactProps) {
  const user = await requireChatGPTUser('/admin/contact');
  const [content, messages, query] = await Promise.all([getContactContent(), listContactMessages(), searchParams]);
  return (
    <main className="admin-shell">
      <aside className="admin-sidebar"><a href="/" className="admin-logo"><img src="/logo.png" alt="EREEP" /><span>Content Studio</span></a><nav><a href="/admin">Homepage</a><a href="/admin/about">About page</a><a href="/admin/projects">Projects page</a><a href="/admin/resources">Resources page</a><a className="active" href="/admin/contact">Contact & enquiries</a></nav><a className="admin-view" href="/contact">View Contact page ↗</a></aside>
      <section className="admin-main">
        <header className="admin-header"><div><p>EREEP custom CMS</p><h1>Contact and enquiries</h1></div><div><span>{user.displayName}</span><a href={chatGPTSignOutPath('/admin/contact')}>Sign out</a></div></header>
        {query?.saved === 'true' && <p className="admin-notice" role="status">Contact page content saved successfully.</p>}
        <form className="cms-form" action="/api/admin/contact" method="post">
          <fieldset><legend>Contact page content</legend><label>Headline<textarea name="heroTitle" rows={2} defaultValue={content.heroTitle} required /></label><label>Introduction<textarea name="heroLead" rows={4} defaultValue={content.heroLead} required /></label><label>Form heading<textarea name="formTitle" rows={2} defaultValue={content.formTitle} required /></label><label>Form introduction<textarea name="formLead" rows={3} defaultValue={content.formLead} required /></label><label>Response note<textarea name="responseNote" rows={3} defaultValue={content.responseNote} required /></label></fieldset>
          <fieldset><legend>Verified contact details</legend><p className="cms-help">Leave any field empty to keep it hidden on the public website.</p><label>Email<textarea name="email" rows={2} defaultValue={content.email} /></label><label>Phone or WhatsApp<textarea name="phone" rows={2} defaultValue={content.phone} /></label><label>Address<textarea name="address" rows={3} defaultValue={content.address} /></label><label>Opening hours<textarea name="hours" rows={3} defaultValue={content.hours} /></label></fieldset>
          <div className="cms-actions"><a href="/contact">Cancel</a><button type="submit">Save Contact page</button></div>
        </form>
        <section className="enquiries"><div className="enquiries-heading"><p>Inbox</p><h2>Recent enquiries</h2><span>{messages.length} message{messages.length === 1 ? '' : 's'}</span></div>
          {messages.length === 0 ? <p className="empty-inbox">No enquiries have been submitted yet.</p> : <div className="enquiry-list">{messages.map((message) => <article key={message.id}><header><div><strong>{message.name}</strong><a href={'mailto:' + message.email}>{message.email}</a>{message.phone && <a href={'tel:' + message.phone}>{message.phone}</a>}</div><span>{new Date(message.created_at).toISOString().slice(0, 10)}</span></header><p className="enquiry-subject">{message.subject}</p><p>{message.message}</p></article>)}</div>}
        </section>
      </section>
    </main>
  );
}
