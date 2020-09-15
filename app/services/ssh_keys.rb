# frozen_string_literal: true

class SshKeys
  ABOUT = "Stagy"

  def generate
    {
      public_key: keys.ssh_public_key,
      private_key: keys.private_key
    }
  end

  private

  def keys
    @_keys = SSHKey.generate(comment: ABOUT)
  end
end
